import React, { useRef, useCallback } from 'react'
import { useGame } from '../game/store.jsx'
import { CLUE_MAP } from '../data/clues.js'

const LONG_PRESS_MS = 420
const MOVE_CANCEL = 12

// 可长按收藏的线索容器。
// 长按 → 全屏聚焦蒙层 + 线索放大 + 底部出现收藏区，拖入即收藏。
export default function Clue({ id, children, block, className = '' }) {
  const { state, dispatch, collect, toast, frameRef, scaleRef, ghostRef } = useGame()
  const clue = CLUE_MAP[id]
  const elRef = useRef(null)
  const timerRef = useRef(null)
  const startRef = useRef(null)
  const draggingRef = useRef(false)
  const suppressRef = useRef(false)

  const collected = state.collected.includes(id)
  const visible = !clue.phase || clue.phase <= state.phase

  const toLocal = useCallback((cx, cy) => {
    const r = frameRef.current.getBoundingClientRect()
    const k = scaleRef.current || 1
    return { x: (cx - r.left) / k, y: (cy - r.top) / k }
  }, [frameRef, scaleRef])

  const moveGhost = useCallback((cx, cy) => {
    const g = ghostRef.current
    if (!g) return
    const { x, y } = toLocal(cx, cy)
    g.style.transform = `translate(${x}px, ${y}px) translate(-50%, -110%)`
  }, [ghostRef, toLocal])

  const overTray = (cx, cy) => {
    const tray = document.getElementById('collect-tray')
    if (!tray) return false
    const r = tray.getBoundingClientRect()
    return cx >= r.left && cx <= r.right && cy >= r.top - 12 && cy <= r.bottom + 12
  }

  const clear = () => {
    clearTimeout(timerRef.current)
    timerRef.current = null
    startRef.current = null
    elRef.current?.classList.remove('clue-pressing')
  }

  const onPointerDown = (e) => {
    if (state.drag || e.button > 0) return
    startRef.current = { x: e.clientX, y: e.clientY, pid: e.pointerId }
    elRef.current.classList.add('clue-pressing')
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      if (collected) {
        elRef.current?.classList.remove('clue-pressing')
        toast('这条线索已经收藏过了', 'warn')
        return
      }
      draggingRef.current = true
      try { elRef.current.setPointerCapture(startRef.current.pid) } catch {}
      dispatch({ type: 'DRAG', drag: { clue: id, mode: 'collect', hover: null } })
      requestAnimationFrame(() => moveGhost(startRef.current?.x ?? e.clientX, startRef.current?.y ?? e.clientY))
      if (navigator.vibrate) navigator.vibrate(15)
    }, LONG_PRESS_MS)
  }

  const onPointerMove = (e) => {
    if (draggingRef.current) {
      moveGhost(e.clientX, e.clientY)
      dispatch({ type: 'DRAG_HOVER', hover: overTray(e.clientX, e.clientY) ? 'tray' : null })
      return
    }
    if (startRef.current && timerRef.current) {
      const dx = e.clientX - startRef.current.x
      const dy = e.clientY - startRef.current.y
      if (dx * dx + dy * dy > MOVE_CANCEL * MOVE_CANCEL) clear()
    } else if (startRef.current) {
      startRef.current = { ...startRef.current, x: e.clientX, y: e.clientY }
    }
  }

  const onPointerUp = (e) => {
    if (draggingRef.current) {
      draggingRef.current = false
      suppressRef.current = true
      setTimeout(() => { suppressRef.current = false }, 350)
      if (overTray(e.clientX, e.clientY)) collect(id)
      else toast('松手前，把它拖到下方的收藏区', 'warn')
      dispatch({ type: 'DRAG', drag: null })
    }
    clear()
  }

  const onPointerCancel = () => {
    if (draggingRef.current) {
      draggingRef.current = false
      dispatch({ type: 'DRAG', drag: null })
    }
    clear()
  }

  const onClickCapture = (e) => {
    if (suppressRef.current) { e.preventDefault(); e.stopPropagation() }
  }

  if (!visible) return null

  const active = state.drag?.mode === 'collect' && state.drag.clue === id

  return (
    <div
      ref={elRef}
      className={
        'clue ' + (block ? 'clue-block ' : '') + className +
        (collected ? ' clue-collected' : '') +
        (active ? ' clue-active' : '')
      }
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onClickCapture={onClickCapture}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
      {collected && <span className="clue-star" title="已收藏">★</span>}
    </div>
  )
}
