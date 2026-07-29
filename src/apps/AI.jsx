import React, { useState } from 'react'
import { useGame } from '../game/store.jsx'
import { AI_SESSIONS } from '../data/content.js'
import Clue from '../components/Clue.jsx'

export default function AIApp() {
  const { state, dispatch } = useGame()
  const [openId, setOpenId] = useState(null)
  const sessions = AI_SESSIONS.filter(s => !s.phase || s.phase <= state.phase)
  const cur = sessions.find(s => s.id === openId)

  if (cur) {
    return (
      <div className="appview ai-app">
        <div className="nav dark">
          <button className="nav-back" onClick={() => setOpenId(null)}>‹</button>
          <span className="nav-title">{cur.title}</span>
        </div>
        <div className="scroll ai-scroll">
          <Clue id={cur.clue} block>
            {cur.msgs.map((m, i) => (
              <div key={i} className={'ai-row ' + m.from}>
                {m.from === 'ai' && <span className="ai-avatar">✨</span>}
                <div className={'ai-bubble ' + m.from}>
                  {m.text.split('\n').map((l, k) => <p key={k}>{l}</p>)}
                </div>
              </div>
            ))}
          </Clue>
        </div>
        <div
          className="ai-input"
          onClick={() => dispatch({ type: 'MODAL', text: '天堂档案员禁止与人间通讯。' })}
        >
          <span>有什么可以帮你？</span><i>↑</i>
        </div>
      </div>
    )
  }

  return (
    <div className="appview ai-app">
      <div className="nav dark">
        <span className="nav-title">AI 助手</span>
      </div>
      <div className="ai-hero">
        <div className="ai-orb">✨</div>
        <div className="ai-hello">你好，我在。</div>
      </div>
      <div className="ai-history-label">历史对话</div>
      <div className="scroll">
        {sessions.map(s => (
          <button key={s.id} className="ai-session" onClick={() => setOpenId(s.id)}>
            <span className="ai-s-title">{s.title}</span>
            <span className="ai-s-time">{s.time} ›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
