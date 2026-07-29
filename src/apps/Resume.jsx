import React, { useEffect, useRef } from 'react'
import { useGame } from '../game/store.jsx'
import { CLUE_MAP, FORM1_SECTIONS, FORM2_SECTIONS, FORM1_SKILLS } from '../data/clues.js'
import { HR_LIST } from '../data/content.js'

export default function ResumeApp() {
  const { state, dispatch } = useGame()
  const tab = state.resumeTab
  return (
    <div className="appview resume-app">
      {tab === 'form' && <FormPane />}
      {tab === 'msgs' && (state.resumeChat === 'boss' ? <BossChat /> : <MsgList />)}
      <div className="resume-tabs">
        <button className={tab === 'form' ? 'on' : ''} onClick={() => dispatch({ type: 'RESUME_TAB', tab: 'form' })}>
          <i>📄</i>简历
        </button>
        <button className={tab === 'msgs' ? 'on' : ''} onClick={() => dispatch({ type: 'RESUME_TAB', tab: 'msgs' })}>
          <i>💬</i>消息
          {state.bossUnread > 0 && <span className="badge">{state.bossUnread}</span>}
        </button>
      </div>
    </div>
  )
}

// ── 简历 tab ──
function FormPane() {
  const { state } = useGame()
  if (!state.submitted1) return <Form1 />
  if (state.phase < 2) return <WaitPane text="简历已提交，等待审核…" sub="张小鱼_简历.docx 已发送给馆长" />
  if (!state.submitted2) return <Form2 />
  return <WaitPane text="档案已提交" sub="张小鱼_档案.docx 已发送给馆长" />
}

function WaitPane({ text, sub }) {
  return (
    <div className="wait-pane">
      <div className="wait-doc">📄</div>
      <div className="wait-text">{text}</div>
      <div className="wait-sub">{sub}</div>
      <div className="wait-hint">去「消息」看看馆长怎么说</div>
    </div>
  )
}

function DropSection({ id, name, form, children, empty }) {
  const { state } = useGame()
  const hot = state.drag?.mode === 'place' && state.drag.hover === id
  return (
    <section className={'drop' + (hot ? ' drop-hot' : '')} data-drop={id}>
      <h3 className="drop-name">{name}</h3>
      {children}
      {empty && <div className="drop-empty">把相关线索拖到这里</div>}
    </section>
  )
}

function PlacedRich({ id, form }) {
  const { dispatch } = useGame()
  const r = CLUE_MAP[id].resume1
  return (
    <div className="placed">
      <div className="placed-head">
        <span className="placed-t">{r.t}</span>
        <span className="placed-d">{r.d}</span>
        <button className="placed-x" onClick={() => dispatch({ type: 'UNPLACE', form, id })}>✕</button>
      </div>
      {r.b && <ul className="placed-b">{r.b.map((x, i) => <li key={i}>{x}</li>)}</ul>}
    </div>
  )
}

function Form1() {
  const { state, dispatch, toast } = useGame()
  const total = Object.values(state.form1).flat().length
  const submit = () => {
    if (total === 0) { toast('先打开右下角收藏夹，把线索拖进简历', 'warn'); return }
    dispatch({ type: 'SUBMIT1' })
  }
  return (
    <div className={'scroll form form1' + (state.sheetOpen ? ' sheet-space' : '')}>
      <div className="form-head">
        <div className="form-kind">人间简历模版</div>
        <div className="form-person">
          <span className="avatar lg" style={{ background: '#dfe7f0' }}>👤</span>
          <div>
            <div className="fp-name">张小鱼</div>
            <div className="fp-sub">26 岁 · 求职意向：海外运营 / 外贸业务</div>
            <div className="fp-sub">138****2049 · zhangxiaoyu@mail.com</div>
          </div>
        </div>
      </div>
      {FORM1_SECTIONS.map(sec => sec.prefill ? (
        <section className="drop drop-prefill" key={sec.id}>
          <h3 className="drop-name">{sec.name}</h3>
          <ul className="placed-b">{FORM1_SKILLS.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </section>
      ) : (
        <DropSection key={sec.id} id={sec.id} name={sec.name} form="form1"
          empty={state.form1[sec.id].length === 0}>
          {state.form1[sec.id].map(id => <PlacedRich key={id} id={id} form="form1" />)}
        </DropSection>
      ))}
      <button className="submit-btn" onClick={submit}>一键提交</button>
      <div className="form-foot">提交给：天堂档案馆 · 馆长</div>
    </div>
  )
}

function Form2() {
  const { state, dispatch, submit2 } = useGame()
  return (
    <div className={'scroll form form2' + (state.sheetOpen ? ' sheet-space' : '')}>
      <div className="form2-head">
        <div className="form2-seal">🕊️</div>
        <div className="form2-kind">天堂档案馆简历模板（标准）</div>
        <div className="form2-sub">一生只填一次，请仔细核对</div>
      </div>
      <section className="drop drop-prefill f2">
        <h3 className="drop-name f2">个人信息</h3>
        <div className="f2-info">
          <span>编号：0079412</span>
          <span>姓名：张小鱼</span>
          <span>在世：26 年</span>
          <span className="f2-note">（由档案系统自动同步）</span>
        </div>
      </section>
      {FORM2_SECTIONS.filter(s => !s.prefill).map(sec => {
        const hot = state.drag?.mode === 'place' && state.drag.hover === sec.id
        return (
          <section key={sec.id} className={'drop f2' + (hot ? ' drop-hot' : '')} data-drop={sec.id}>
            <h3 className="drop-name f2">{sec.name}</h3>
            {state.form2[sec.id].map(id => (
              <div className="placed f2" key={id}>
                <span className="placed-serif">{CLUE_MAP[id].resume2}</span>
                <button className="placed-x" onClick={() => dispatch({ type: 'UNPLACE', form: 'form2', id })}>✕</button>
              </div>
            ))}
            {state.form2[sec.id].length === 0 && <div className="drop-empty f2">这一栏还空着</div>}
          </section>
        )
      })}
      <button className="submit-btn f2" onClick={submit2}>一键提交</button>
      <div className="form-foot f2">每一栏都至少需要一条，她的一生不该有空白。</div>
    </div>
  )
}

// ── 消息 tab ──
function MsgList() {
  const { state, dispatch } = useGame()
  const last = state.bossMsgs[state.bossMsgs.length - 1]
  const preview = last ? (last.file ? '[文件] ' + last.file : last.text) : ''
  return (
    <div className="scroll">
      <div className="msg-list-head">消息</div>
      <button className="contact boss-row" onClick={() => dispatch({ type: 'RESUME_CHAT', chat: 'boss' })}>
        <span className="avatar" style={{ background: '#e9ddc0' }}>👩‍💼</span>
        <span className="contact-mid">
          <span className="contact-name">Boss <i className="pin-tag">置顶</i></span>
          <span className="contact-preview">{preview}</span>
        </span>
        <span className="contact-right">
          <span className="contact-time">现在</span>
          {state.bossUnread > 0 && <span className="badge badge-inline">{state.bossUnread}</span>}
        </span>
      </button>
      {HR_LIST.map((h, i) => (
        <div key={i} className="contact hr-row">
          <span className="avatar" style={{ background: '#e3e3e6' }}>🏢</span>
          <span className="contact-mid">
            <span className="contact-name">{h.name}</span>
            <span className="contact-preview">{h.preview}</span>
          </span>
          <span className="contact-right"><span className="contact-time">{h.time}</span></span>
        </div>
      ))}
    </div>
  )
}

function BossChat() {
  const { state, dispatch, choose, toast } = useGame()
  const scRef = useRef(null)
  useEffect(() => {
    const el = scRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [state.bossMsgs.length, state.bossTyping, state.bossChoice])

  return (
    <div className="boss-chat">
      <div className="nav">
        <button className="nav-back" onClick={() => dispatch({ type: 'RESUME_CHAT', chat: null })}>‹</button>
        <span className="nav-title">Boss</span>
      </div>
      <div className="scroll chat-scroll" ref={scRef}>
        <div className="chat-sys">馆长 · 天堂档案馆</div>
        {state.bossMsgs.map((m, i) => (
          <div key={i} className={'bubble-row ' + (m.from === 'me' ? 'me' : 'them')}>
            {m.from === 'boss' && <span className="avatar sm" style={{ background: '#e9ddc0' }}>👩‍💼</span>}
            {m.file
              ? <div className={'bubble file-bubble ' + (m.from === 'me' ? 'me' : 'them')}>
                  <span className="file-ico">📄</span>
                  <span className="file-name">{m.file}</span>
                  <span className="file-sub">DOCX 文档</span>
                </div>
              : <div className={'bubble ' + (m.from === 'me' ? 'me' : 'them')}>{m.text}</div>}
          </div>
        ))}
        {state.bossTyping && (
          <div className="bubble-row them">
            <span className="avatar sm" style={{ background: '#e9ddc0' }}>👩‍💼</span>
            <div className="bubble them typing"><i /><i /><i /></div>
          </div>
        )}
      </div>
      {state.bossChoice ? (
        <div className="choices">
          {state.bossChoice.map(op => (
            <button key={op} className="choice-btn" onClick={() => choose(op)}>{op}</button>
          ))}
        </div>
      ) : (
        <div className="fake-input" onClick={() => toast('这里打不了字，等选项出现时点选项', 'warn')}>
          <span className="fi-box" />
          <span className="fi-plus">＋</span>
        </div>
      )}
    </div>
  )
}
