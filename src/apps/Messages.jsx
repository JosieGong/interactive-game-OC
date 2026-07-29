import React, { useEffect, useRef } from 'react'
import { useGame } from '../game/store.jsx'
import { CHATS, MOM_BANNERS } from '../data/content.js'
import Clue from '../components/Clue.jsx'

export default function MessagesApp() {
  const { state } = useGame()
  const chat = CHATS.find(c => c.id === state.msgChat)
  return chat ? <ChatView chat={chat} /> : <ContactList />
}

function ContactList() {
  const { state, dispatch } = useGame()
  return (
    <div className="appview msg-app">
      <div className="nav">
        <span className="nav-title">信息</span>
      </div>
      <div className="scroll">
        {CHATS.map(c => {
          let preview = c.preview, time = c.time, badge = c.badge
          if (c.id === 'mom') {
            if (state.momExtra > 0) { preview = MOM_BANNERS[state.momExtra - 1]; time = '现在' }
            badge = state.momRead ? 0 : c.badge + state.momExtra
          }
          const row = (
            <button className="contact" onClick={() => dispatch({ type: 'MSG_CHAT', chat: c.id })}>
              <span className="avatar" style={{ background: c.color }}>{c.avatar}</span>
              <span className="contact-mid">
                <span className="contact-name">{c.name}</span>
                <span className="contact-preview">{preview}</span>
              </span>
              <span className="contact-right">
                <span className="contact-time">{time}</span>
                {badge > 0 && <span className="badge badge-inline">{badge}</span>}
              </span>
            </button>
          )
          return c.clueRow
            ? <Clue key={c.id} id={c.clueRow} block>{row}</Clue>
            : <div key={c.id}>{row}</div>
        })}
      </div>
    </div>
  )
}

function ChatView({ chat }) {
  const { state, dispatch } = useGame()
  const scRef = useRef(null)
  useEffect(() => {
    const el = scRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [chat.id, state.momExtra, state.phase])

  const momExtras = chat.id === 'mom' && state.momExtra > 0
    ? MOM_BANNERS.slice(0, state.momExtra)
    : []

  return (
    <div className="appview msg-app">
      <div className="nav">
        <button className="nav-back" onClick={() => dispatch({ type: 'MSG_CHAT', chat: null })}>‹</button>
        <span className="nav-title">{chat.name}</span>
      </div>
      <div className="scroll chat-scroll" ref={scRef}>
        {chat.blocks.map((b, i) => <Block key={i} b={b} chat={chat} />)}
        {momExtras.length > 0 && (
          <>
            <div className="chat-day">现在</div>
            {momExtras.map((t, i) => (
              <div className="bubble-row them" key={'mx' + i}>
                <span className="avatar sm" style={{ background: chat.color }}>{chat.avatar}</span>
                <div className="bubble them">{t}</div>
              </div>
            ))}
          </>
        )}
      </div>
      <FakeInput />
    </div>
  )
}

function Block({ b, chat }) {
  if (b.type === 'clue-group') {
    return (
      <Clue id={b.clue} block className="clue-msgs">
        {b.items.map((x, i) => <Block key={i} b={x} chat={chat} />)}
        {b.note && <div className="chat-note">{b.note}</div>}
      </Clue>
    )
  }
  switch (b.type) {
    case 'day': return <div className="chat-day">{b.text}</div>
    case 'sys': return <div className="chat-sys">{b.text}</div>
    case 'recall': return <div className="chat-sys recall">{b.text}</div>
    case 'link':
      return (
        <div className="bubble-row them">
          <span className="avatar sm" style={{ background: chat.color }}>{chat.avatar}</span>
          <div className="bubble them link-card">
            <span className="link-title">{b.title}</span>
            <span className="link-sub">🔗 {b.sub}</span>
          </div>
          {b.time && <span className="bubble-time">{b.time}</span>}
        </div>
      )
    case 'voice-draft':
      return (
        <div className="bubble-row me">
          <div className="bubble me voice-draft">▶ {b.text}</div>
        </div>
      )
    case 'msg': {
      const me = b.from === 'me'
      return (
        <div className={'bubble-row ' + (me ? 'me' : 'them')}>
          {!me && <span className="avatar sm" style={{ background: chat.color }}>{chat.avatar}</span>}
          <div className="bubble-col">
            {!me && b.name && <span className="bubble-name">{b.name}</span>}
            <div className={'bubble ' + (me ? 'me' : 'them')}>{b.text}</div>
          </div>
          {b.time && <span className="bubble-time">{b.time}</span>}
        </div>
      )
    }
    default: return null
  }
}

export function FakeInput({ placeholder = '' }) {
  const { dispatch } = useGame()
  const forbid = () => dispatch({ type: 'MODAL', text: '天堂档案员禁止与人间通讯。' })
  return (
    <div className="fake-input" onClick={forbid}>
      <span className="fi-voice">🎤</span>
      <span className="fi-box">{placeholder}</span>
      <span className="fi-emoji">😊</span>
      <span className="fi-plus">＋</span>
    </div>
  )
}
