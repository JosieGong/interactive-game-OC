import React, { useState } from 'react'
import { useGame } from '../game/store.jsx'
import { PHOTO_MONTHS, PHOTO_FAV, PHOTO_DELETED } from '../data/content.js'
import Clue from '../components/Clue.jsx'

export default function PhotosApp() {
  const { state } = useGame()
  const [tab, setTab] = useState('all')
  return (
    <div className="appview photos-app">
      <div className="nav">
        <span className="nav-title">相册</span>
      </div>
      <div className="seg">
        <button className={tab === 'all' ? 'on' : ''} onClick={() => setTab('all')}>全部</button>
        <button className={tab === 'fav' ? 'on' : ''} onClick={() => setTab('fav')}>收藏</button>
        {state.phase >= 2 && (
          <button className={tab === 'del' ? 'on' : ''} onClick={() => setTab('del')}>最近删除</button>
        )}
      </div>
      <div className="scroll">
        {tab === 'all' && <AllPhotos />}
        {tab === 'fav' && <FavPhotos />}
        {tab === 'del' && <DeletedPhotos />}
      </div>
    </div>
  )
}

function AllPhotos() {
  return (
    <>
      <Clue id="ph-all" block className="ph-summary">
        <div className="ph-sum-title">1,247 张照片</div>
        <div className="ph-sum-line">☁️ 云 342 · 🌸 花 217 · 🐈 猫 289 · 🍜 每一顿饭 399</div>
        <div className="ph-sum-line dim">自拍 0</div>
      </Clue>
      {PHOTO_MONTHS.map(m => (
        <div key={m.m} className="ph-month">
          <div className="ph-month-name">{m.m}</div>
          <div className="ph-grid">
            {m.items.map((p, i) => (
              <div key={i} className={'ph-tile g' + p.g}>
                <span className="ph-emoji">{p.e}</span>
                {p.cap && <span className="ph-cap">{p.cap}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="ph-end">— 2019年9月，第一张照片 —</div>
    </>
  )
}

function FavPhotos() {
  return (
    <div className="ph-fav">
      {PHOTO_FAV.map(d => (
        <Clue key={d.id} id={d.id} block>
          <div className="doc-card">
            <div className="doc-seal">🏛️</div>
            <div className="doc-title">{d.title}</div>
            <div className="doc-sub">{d.sub}</div>
            <div className="doc-date">{d.date}</div>
            <div className="doc-stamp">印</div>
          </div>
        </Clue>
      ))}
    </div>
  )
}

function DeletedPhotos() {
  return (
    <Clue id="ph-deleted" block>
      <div className="ph-del-head">这些项目将在 <b>6 天</b> 后被永久删除</div>
      <div className="ph-grid ph-del-grid">
        {PHOTO_DELETED.map((p, i) => (
          <div key={i} className="ph-tile sketch">
            <span className="ph-emoji">{p.e}</span>
            <span className="ph-cap">{p.cap}</span>
            <span className="ph-days">剩 6 天</span>
          </div>
        ))}
      </div>
    </Clue>
  )
}
