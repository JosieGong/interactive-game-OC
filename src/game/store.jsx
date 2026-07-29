import React, { createContext, useContext, useReducer, useEffect, useRef, useCallback } from 'react'
import { CLUE_MAP, FORM2_SECTIONS } from '../data/clues.js'
import { SCRIPT_REVEAL, SCRIPT_ENDING, BOSS_PRELUDE, FAIL_LINES, MOM_BANNERS } from '../data/content.js'

const GameCtx = createContext(null)

const initial = {
  stage: 'boot',            // boot → intro → tutorial → play → ending
  phase: 1,
  app: null,                // null = 主屏幕
  msgChat: null,            // 信息 app 当前会话
  resumeTab: 'form',        // 交简历 app: 'form' | 'msgs'
  resumeChat: null,         // 'boss' | null
  collected: [],            // 已收藏线索 id（按收藏顺序）
  form1: { edu: [], intern: [], proj: [] },
  form2: { kindness: [], friends: [], care: [], hobby: [], secret: [] },
  submitted1: false,
  submitted2: false,
  bossMsgs: BOSS_PRELUDE.map(m => ({ ...m })),
  bossTyping: false,
  bossChoice: null,
  bossUnread: 0,
  script: null,             // {name, idx}
  momExtra: 0,              // 妈妈追加的深层消息条数（通知横幅同步）
  momRead: false,
  banners: [],              // 通知横幅队列
  toast: null,              // {id,text}
  modal: null,              // 弹窗文字
  drag: null,               // {clue, mode:'collect'|'place', hover}
  sheetOpen: false,
  failCount: 0,
  tutorialStep: 0,
}

let uid = 1

function reducer(s, a) {
  switch (a.type) {
    case 'STAGE': return { ...s, stage: a.stage }
    case 'TUTORIAL_STEP': return { ...s, tutorialStep: a.step }
    case 'OPEN_APP': {
      const next = { ...s, app: a.app, sheetOpen: false }
      if (a.app === 'resume') {
        next.resumeTab = a.tab || 'form'
        next.resumeChat = a.chat || null
        if (a.chat === 'boss') next.bossUnread = 0
      }
      if (a.app === 'messages') {
        next.msgChat = a.chat || null
        if (a.chat === 'mom') next.momRead = true
      }
      return next
    }
    case 'GO_HOME':
      return { ...s, app: null, msgChat: null, resumeChat: null, sheetOpen: false, drag: null }
    case 'MSG_CHAT': {
      const next = { ...s, msgChat: a.chat }
      if (a.chat === 'mom') next.momRead = true
      return next
    }
    case 'RESUME_TAB': return { ...s, resumeTab: a.tab, resumeChat: null }
    case 'RESUME_CHAT': {
      const next = { ...s, resumeChat: a.chat }
      if (a.chat === 'boss') next.bossUnread = 0
      return next
    }
    case 'COLLECT':
      if (s.collected.includes(a.id)) return s
      return { ...s, collected: [...s.collected, a.id] }
    case 'SHEET': return { ...s, sheetOpen: a.open }
    case 'TOAST': return { ...s, toast: { id: uid++, text: a.text, kind: a.kind } }
    case 'CLEAR_TOAST': return s.toast && s.toast.id === a.id ? { ...s, toast: null } : s
    case 'MODAL': return { ...s, modal: a.text }
    case 'DRAG': return { ...s, drag: a.drag }
    case 'DRAG_HOVER':
      return s.drag && s.drag.hover !== a.hover ? { ...s, drag: { ...s.drag, hover: a.hover } } : s
    case 'PLACE': {
      const form = { ...s[a.form] }
      form[a.section] = [...form[a.section], a.id]
      return { ...s, [a.form]: form }
    }
    case 'UNPLACE': {
      const form = {}
      for (const k of Object.keys(s[a.form])) form[k] = s[a.form][k].filter(id => id !== a.id)
      return { ...s, [a.form]: form }
    }
    case 'SUBMIT1':
      return {
        ...s, submitted1: true,
        app: 'resume', resumeTab: 'msgs', resumeChat: null,
        script: { name: 'reveal', idx: 0 },
      }
    case 'SUBMIT2':
      return {
        ...s, submitted2: true,
        app: 'resume', resumeTab: 'msgs', resumeChat: null, sheetOpen: false,
        script: { name: 'ending', idx: 0 },
      }
    case 'FAIL2': {
      const line = FAIL_LINES[s.failCount % FAIL_LINES.length]
      return {
        ...s, failCount: s.failCount + 1,
        bossMsgs: [...s.bossMsgs, { from: 'boss', text: line }],
        bossUnread: s.bossUnread + 1,
        banners: [...s.banners, { id: uid++, app: 'Boss', icon: '👩‍💼', title: '馆长', text: line, tap: 'boss' }],
      }
    }
    case 'BOSS_MSG': {
      const viewing = s.app === 'resume' && s.resumeTab === 'msgs' && s.resumeChat === 'boss'
      return {
        ...s,
        bossMsgs: [...s.bossMsgs, a.msg],
        bossUnread: viewing || a.msg.from === 'me' ? s.bossUnread : s.bossUnread + 1,
      }
    }
    case 'BOSS_TYPING': return { ...s, bossTyping: a.on }
    case 'BOSS_CHOICE': return { ...s, bossChoice: a.options }
    case 'SCRIPT_NEXT': return s.script ? { ...s, script: { ...s.script, idx: s.script.idx + 1 } } : s
    case 'SCRIPT_END': return { ...s, script: null }
    case 'UNLOCK2': return { ...s, phase: 2 }
    case 'MOM_PUSH': {
      const text = MOM_BANNERS[s.momExtra]
      if (text == null) return s
      return {
        ...s,
        momExtra: s.momExtra + 1,
        momRead: false,
        banners: [...s.banners, { id: uid++, app: '信息', icon: '👩', title: '妈', text, tap: 'mom' }],
      }
    }
    case 'BANNER_POP': return { ...s, banners: s.banners.filter(b => b.id !== a.id) }
    case 'ENDING': return { ...s, stage: 'ending', app: null, drag: null, sheetOpen: false }
    default: return s
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  const frameRef = useRef(null)   // 手机屏幕 DOM
  const scaleRef = useRef(1)      // 当前缩放
  const ghostRef = useRef(null)   // 拖拽跟随的浮层 DOM

  // ── 馆长剧本引擎 ──
  const scriptDef = state.script
    ? (state.script.name === 'reveal' ? SCRIPT_REVEAL : SCRIPT_ENDING)
    : null

  useEffect(() => {
    if (!state.script || !scriptDef) return
    const step = scriptDef[state.script.idx]
    if (!step) { dispatch({ type: 'SCRIPT_END' }); return }
    let t1, t2
    switch (step.t) {
      case 'me':
        t1 = setTimeout(() => {
          dispatch({ type: 'BOSS_MSG', msg: { from: 'me', text: step.text } })
          dispatch({ type: 'SCRIPT_NEXT' })
        }, 500)
        break
      case 'boss':
        t1 = setTimeout(() => {
          dispatch({ type: 'BOSS_MSG', msg: { from: 'boss', text: step.text } })
          dispatch({ type: 'SCRIPT_NEXT' })
        }, 650)
        break
      case 'file':
        t1 = setTimeout(() => {
          dispatch({ type: 'BOSS_MSG', msg: { from: step.from, file: step.name } })
          dispatch({ type: 'SCRIPT_NEXT' })
        }, 500)
        break
      case 'typing':
        dispatch({ type: 'BOSS_TYPING', on: true })
        t1 = setTimeout(() => {
          dispatch({ type: 'BOSS_TYPING', on: false })
          t2 = setTimeout(() => dispatch({ type: 'SCRIPT_NEXT' }), 250)
        }, step.ms)
        break
      case 'pause':
        t1 = setTimeout(() => dispatch({ type: 'SCRIPT_NEXT' }), step.ms)
        break
      case 'choice':
        dispatch({ type: 'BOSS_CHOICE', options: step.options })
        break // 等玩家选择
      case 'action':
        if (step.do === 'unlock2') {
          dispatch({ type: 'UNLOCK2' })
          dispatch({ type: 'SCRIPT_NEXT' })
        } else if (step.do === 'ending') {
          dispatch({ type: 'ENDING' })
          dispatch({ type: 'SCRIPT_END' })
        }
        break
      default:
        dispatch({ type: 'SCRIPT_NEXT' })
    }
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [state.script])

  // 妈妈的三条横幅依次推送（进入第二阶段后开始）
  useEffect(() => {
    if (state.phase === 2 && state.momExtra < 3) {
      const t = setTimeout(
        () => dispatch({ type: 'MOM_PUSH' }),
        state.momExtra === 0 ? 1600 : 2400,
      )
      return () => clearTimeout(t)
    }
  }, [state.phase, state.momExtra])

  const choose = useCallback((text) => {
    dispatch({ type: 'BOSS_CHOICE', options: null })
    dispatch({ type: 'BOSS_MSG', msg: { from: 'me', text } })
    dispatch({ type: 'SCRIPT_NEXT' })
  }, [])

  const toast = useCallback((text, kind) => dispatch({ type: 'TOAST', text, kind }), [])

  const collect = useCallback((id) => {
    dispatch({ type: 'COLLECT', id })
    toast('已收进收藏夹 ⭐', 'ok')
  }, [toast])

  // 尝试把线索放进简历板块；返回是否成功
  const tryPlace = useCallback((clueId, sectionId, formName) => {
    const clue = CLUE_MAP[clueId]
    const key = formName === 'form1' ? clue.form1 : clue.cat
    if (key && key === sectionId) {
      dispatch({ type: 'PLACE', form: formName, section: sectionId, id: clueId })
      return true
    }
    if (formName === 'form1') {
      toast(clue.tag
        ? `「${clue.tag}」——这份简历放不下这一条`
        : (key ? '放错板块了，换一栏试试' : '这份简历放不下这一条'), 'warn')
    } else {
      toast(clue.cat
        ? '放错板块了，换一栏试试'
        : '天堂的简历，不看这些', 'warn')
    }
    return false
  }, [toast])

  const submit2 = useCallback(() => {
    const need = FORM2_SECTIONS.filter(x => !x.prefill)
    const ok = need.every(x => state.form2[x.id].length > 0)
    if (ok) dispatch({ type: 'SUBMIT2' })
    else dispatch({ type: 'FAIL2' })
    return ok
  }, [state.form2])

  const value = {
    state, dispatch, choose, toast, collect, tryPlace, submit2,
    frameRef, scaleRef, ghostRef,
  }
  if (import.meta.env.DEV) window.__game = value
  return <GameCtx.Provider value={value}>{children}</GameCtx.Provider>
}

export const useGame = () => useContext(GameCtx)
