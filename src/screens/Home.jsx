import React from 'react'
import { useGame } from '../game/store.jsx'

// 主屏幕：壁纸 + App 网格（交简历图标为 2×2 大图标）
export default function Home() {
  const { state, dispatch } = useGame()
  const open = (app) => dispatch({ type: 'OPEN_APP', app })
  const msgBadge = 3 + (state.momRead ? 0 : state.momExtra)
  const resumeBadge = state.bossUnread

  return (
    <div className="home">
      <div className="home-widget">
        <div className="hw-date">3月4日 周三</div>
        <div className="hw-line">今日待办：改简历 · 投简历 · 等消息</div>
      </div>
      <div className="grid">
        <button className="app app-big" onClick={() => open('resume')}>
          <span className="app-icon icon-resume">
            <i className="doc-fold" />📄
            {resumeBadge > 0 && <span className="badge">{resumeBadge}</span>}
          </span>
          <span className="app-name">交简历</span>
        </button>
        <AppBtn id="messages" name="信息" cls="icon-msg" glyph="💬" badge={msgBadge} onOpen={open} />
        <AppBtn id="photos" name="相册" cls="icon-photos" glyph={<span className="pinwheel" />} onOpen={open} />
        <AppBtn id="notes" name="备忘录" cls="icon-notes" glyph="📝" onOpen={open} />
        <AppBtn id="ai" name="AI 助手" cls="icon-ai" glyph="✨" onOpen={open} />
        <AppBtn id="shop" name="网购" cls="icon-shop" glyph="🛍️" onOpen={open} />
        <AppBtn id="wallet" name="钱包" cls="icon-wallet" glyph="💳" onOpen={open} />
      </div>
    </div>
  )
}

function AppBtn({ id, name, cls, glyph, badge, onOpen }) {
  return (
    <button className="app" onClick={() => onOpen(id)}>
      <span className={'app-icon ' + cls}>
        {glyph}
        {badge > 0 && <span className="badge">{badge}</span>}
      </span>
      <span className="app-name">{name}</span>
    </button>
  )
}
