import React, { useEffect, useRef, useState } from 'react'
import { useGame } from '../game/store.jsx'
import { CLUE_MAP, APP_NAMES } from '../data/clues.js'

// ── 状态栏 ──
export function StatusBar({ dark }) {
  return (
    <div className={'statusbar' + (dark ? ' dark' : '')}>
      <span className="sb-time">23:41</span>
      <span className="sb-right">
        <span className="sb-signal">▂▄▆█</span>
        <span className="sb-wifi">⌾</span>
        <span className="sb-batt"><i style={{ width: '30%' }} /></span>
      </span>
    </div>
  )
}

// ── 底部 Home 条：从底部上滑回主屏幕 ──
export function HomeBar({ dark }) {
  const { dispatch } = useGame()
  const start = useRef(null)
  const barRef = useRef(null)
  return (
    <div
      className={'homebar' + (dark ? ' dark' : '')}
      ref={barRef}
      onPointerDown={(e) => {
        start.current = e.clientY
        try { barRef.current.setPointerCapture(e.pointerId) } catch {}
      }}
      onPointerMove={(e) => {
        if (start.current != null && start.current - e.clientY > 46) {
          start.current = null
          dispatch({ type: 'GO_HOME' })
        }
      }}
      onPointerUp={() => { start.current = null }}
    >
      <div className="homebar-pill" />
    </div>
  )
}

// ── 通知横幅 ──
export function Banners() {
  const { state, dispatch } = useGame()
  return (
    <div className="banners">
      {state.banners.map(b => <Banner key={b.id} b={b} dispatch={dispatch} />)}
    </div>
  )
}

function Banner({ b, dispatch }) {
  useEffect(() => {
    const t = setTimeout(() => dispatch({ type: 'BANNER_POP', id: b.id }), 4600)
    return () => clearTimeout(t)
  }, [b.id, dispatch])
  const tap = () => {
    dispatch({ type: 'BANNER_POP', id: b.id })
    if (b.tap === 'mom') dispatch({ type: 'OPEN_APP', app: 'messages', chat: 'mom' })
    if (b.tap === 'boss') dispatch({ type: 'OPEN_APP', app: 'resume', tab: 'msgs', chat: 'boss' })
  }
  return (
    <div className="banner" onClick={tap}>
      <span className="banner-icon">{b.icon}</span>
      <span className="banner-body">
        <span className="banner-title">{b.title} <em>{b.app} · 现在</em></span>
        <span className="banner-text">{b.text}</span>
      </span>
    </div>
  )
}

// ── Toast ──
export function Toast() {
  const { state, dispatch } = useGame()
  const t = state.toast
  useEffect(() => {
    if (!t) return
    const timer = setTimeout(() => dispatch({ type: 'CLEAR_TOAST', id: t.id }), 2100)
    return () => clearTimeout(timer)
  }, [t, dispatch])
  if (!t) return null
  return <div key={t.id} className={'toast toast-' + (t.kind || 'ok')}>{t.text}</div>
}

// ── 弹窗 ──
export function Modal() {
  const { state, dispatch } = useGame()
  if (!state.modal) return null
  return (
    <div className="modal-mask" onClick={() => dispatch({ type: 'MODAL', text: null })}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-badge">🕊️</div>
        <div className="modal-text">{state.modal}</div>
        <button className="modal-btn" onClick={() => dispatch({ type: 'MODAL', text: null })}>好</button>
      </div>
    </div>
  )
}

// ── 右下角收藏夹按钮 ──
export function StarFab() {
  const { state, dispatch } = useGame()
  if (state.drag?.mode === 'collect') return null
  return (
    <button
      className={'star-fab' + (state.sheetOpen ? ' open' : '')}
      onClick={() => dispatch({ type: 'SHEET', open: !state.sheetOpen })}
      aria-label="收藏夹"
    >
      ★
      {state.collected.length > 0 && <span className="fab-count">{state.collected.length}</span>}
    </button>
  )
}

// ── 收藏夹面板（浏览模式 / 简历拖拽模式共用）──
// draggable: {form: 'form1'|'form2'} 时 chips 可拖入简历板块
export function CollectionSheet({ draggable }) {
  const { state } = useGame()
  if (!state.sheetOpen) return null
  const placedIds = draggable
    ? Object.values(state[draggable.form]).flat()
    : []
  return (
    <div className="sheet">
      <div className="sheet-head">
        <span className="sheet-title">⭐ 收藏夹 · {state.collected.length} 条线索</span>
        <span className="sheet-hint">{draggable ? '把线索拖进上方对应板块' : '长按各处线索可继续收藏'}</span>
      </div>
      <div className="sheet-list">
        {state.collected.length === 0 && (
          <div className="sheet-empty">还没有收藏。去各个 App 里长按发光的信息试试。</div>
        )}
        {state.collected.map(id => (
          draggable
            ? <DragChip key={id} id={id} form={draggable.form} used={placedIds.includes(id)} />
            : <ChipView key={id} id={id} />
        ))}
      </div>
    </div>
  )
}

function ChipView({ id }) {
  const c = CLUE_MAP[id]
  return (
    <div className="chip">
      <span className="chip-icon">{c.icon}</span>
      <span className="chip-label">{c.label}</span>
      <span className="chip-app">{APP_NAMES[c.app]}</span>
    </div>
  )
}

// 简历页里可拖拽的线索 chip
export function DragChip({ id, form, used }) {
  const { dispatch, tryPlace, frameRef, scaleRef, ghostRef } = useGame()
  const c = CLUE_MAP[id]
  const elRef = useRef(null)
  const dragRef = useRef(false)
  const [bounce, setBounce] = useState(false)

  const moveGhost = (cx, cy) => {
    const g = ghostRef.current
    if (!g) return
    const r = frameRef.current.getBoundingClientRect()
    const k = scaleRef.current || 1
    g.style.transform = `translate(${(cx - r.left) / k}px, ${(cy - r.top) / k}px) translate(-50%, -110%)`
  }
  const sectionAt = (cx, cy) =>
    document.elementFromPoint(cx, cy)?.closest('[data-drop]')?.dataset.drop || null

  if (used) return (
    <div className="chip chip-used">
      <span className="chip-icon">{c.icon}</span>
      <span className="chip-label">{c.label}</span>
      <span className="chip-app">已放入</span>
    </div>
  )

  return (
    <div
      ref={elRef}
      className={'chip chip-drag' + (bounce ? ' chip-bounce' : '')}
      onPointerDown={(e) => {
        dragRef.current = true
        try { elRef.current.setPointerCapture(e.pointerId) } catch {}
        dispatch({ type: 'DRAG', drag: { clue: id, mode: 'place', form, hover: null } })
        requestAnimationFrame(() => moveGhost(e.clientX, e.clientY))
      }}
      onPointerMove={(e) => {
        if (!dragRef.current) return
        moveGhost(e.clientX, e.clientY)
        dispatch({ type: 'DRAG_HOVER', hover: sectionAt(e.clientX, e.clientY) })
      }}
      onPointerUp={(e) => {
        if (!dragRef.current) return
        dragRef.current = false
        const sec = sectionAt(e.clientX, e.clientY)
        dispatch({ type: 'DRAG', drag: null })
        if (sec) {
          const ok = tryPlace(id, sec, form)
          if (!ok) { setBounce(true); setTimeout(() => setBounce(false), 500) }
        }
      }}
      onPointerCancel={() => { dragRef.current = false; dispatch({ type: 'DRAG', drag: null }) }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <span className="chip-icon">{c.icon}</span>
      <span className="chip-label">{c.label}</span>
      <span className="chip-app">{APP_NAMES[c.app]}</span>
    </div>
  )
}

// ── 拖拽浮层：聚焦蒙层 + 底部收藏区 + 跟随手指的幽灵卡片 ──
export function DragLayer() {
  const { state, ghostRef } = useGame()
  const drag = state.drag

  // 拖拽期间阻止页面滚动
  useEffect(() => {
    if (!drag) return
    const prevent = (e) => e.preventDefault()
    document.addEventListener('touchmove', prevent, { passive: false })
    return () => document.removeEventListener('touchmove', prevent)
  }, [drag])

  if (!drag) return null
  const c = CLUE_MAP[drag.clue]
  return (
    <>
      {drag.mode === 'collect' && <div className="drag-mask" />}
      {drag.mode === 'collect' && (
        <div id="collect-tray" className={'tray' + (drag.hover === 'tray' ? ' tray-hot' : '')}>
          <div className="tray-star">★</div>
          <div className="tray-text">拖到这里，收进收藏夹</div>
        </div>
      )}
      <div ref={ghostRef} className="ghost">
        <span className="chip-icon">{c.icon}</span>
        <span className="chip-label">{c.label}</span>
      </div>
    </>
  )
}
