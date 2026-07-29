import React, { useState } from 'react'
import { useGame } from '../game/store.jsx'
import { NOTES } from '../data/content.js'
import Clue from '../components/Clue.jsx'

export default function NotesApp() {
  const { state } = useGame()
  const [openId, setOpenId] = useState(null)
  const notes = NOTES.filter(n => !n.phase || n.phase <= state.phase)
  const note = notes.find(n => n.id === openId)
  if (note) return <NoteDetail note={note} onBack={() => setOpenId(null)} />
  return (
    <div className="appview notes-app">
      <div className="nav">
        <span className="nav-title">备忘录</span>
      </div>
      <div className="scroll">
        {notes.map(n => (
          <div key={n.id} className="note-row">
            <div className="note-date">{n.date}</div>
            <button className="note-box" onClick={() => setOpenId(n.id)}>
              <span className="note-title">{n.title}</span>
              <span className="note-preview">{n.body[0]}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function NoteDetail({ note, onBack }) {
  return (
    <div className="appview notes-app">
      <div className="nav">
        <button className="nav-back" onClick={onBack}>‹</button>
        <span className="nav-title">备忘录</span>
      </div>
      <div className="scroll note-detail">
        <div className="note-d-date">{note.date}</div>
        <Clue id={note.clue} block>
          <h2 className="note-d-title">{note.title}</h2>
          {note.body.map((line, i) => (
            <p key={i} className="note-d-line">{line || ' '}</p>
          ))}
          {note.deleted && (
            <div className="note-deleted">
              <div className="note-del-label">已删除的文字（{note.deleted.length}）</div>
              {note.deleted.map((line, i) => (
                <p key={i} className="note-del-line">{line}</p>
              ))}
            </div>
          )}
        </Clue>
      </div>
    </div>
  )
}
