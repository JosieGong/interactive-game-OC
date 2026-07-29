import React, { useState } from 'react'
import { useGame } from '../game/store.jsx'

const STEPS = [
  {
    icon: '👆',
    title: '翻看她的手机',
    text: '点击图标进入 App，翻看小鱼留下的痕迹。哪些信息值得收进档案，要靠你自己判断。',
    tip: '从屏幕最底部向上滑，随时回到主屏幕。',
    arrow: { top: '34%', left: '50%', dir: 'up' },
  },
  {
    icon: '✋',
    title: '长按收藏线索',
    text: '看到重要的信息，长按它——屏幕会聚焦到这条线索，底部弹出收藏区，把它拖进去就收藏成功了。',
    tip: '收藏过的线索会标上 ★，不会重复收藏。',
    demo: true,
  },
  {
    icon: '⭐',
    title: '收藏夹',
    text: '右下角的星星是收藏夹，点开可以随时查看已收藏的线索。',
    arrow: { bottom: '96px', right: '30px', dir: 'down' },
  },
  {
    icon: '📄',
    title: '完成她的简历',
    text: '打开「交简历」，点开收藏夹，把线索拖进简历对应的板块。放不进去的线索会被弹回来。填好后点「一键提交」交给馆长。',
    arrow: { top: '30%', left: '26%', dir: 'up' },
  },
]

export default function Tutorial() {
  const { dispatch } = useGame()
  const [i, setI] = useState(0)
  const s = STEPS[i]
  const done = () => dispatch({ type: 'STAGE', stage: 'play' })
  return (
    <div className="tut">
      {s.arrow && (
        <div
          className={'tut-arrow tut-arrow-' + s.arrow.dir}
          style={{ top: s.arrow.top, left: s.arrow.left, right: s.arrow.right, bottom: s.arrow.bottom }}
        >
          {s.arrow.dir === 'up' ? '⬆' : '⬇'}
        </div>
      )}
      <div className="tut-card">
        <div className="tut-icon">{s.icon}</div>
        <div className="tut-title">{s.title}</div>
        <div className="tut-text">{s.text}</div>
        {s.tip && <div className="tut-tip">{s.tip}</div>}
        {s.demo && (
          <div className="tut-demo">
            <div className="tut-demo-clue">📝 一条线索 <span className="tut-demo-finger">👆</span></div>
            <div className="tut-demo-arrow">⬇</div>
            <div className="tut-demo-tray">★ 收藏区</div>
          </div>
        )}
        <div className="tut-dots">
          {STEPS.map((_, k) => <i key={k} className={k === i ? 'on' : ''} />)}
        </div>
        <div className="tut-btns">
          <button className="tut-skip" onClick={done}>跳过</button>
          {i < STEPS.length - 1
            ? <button className="tut-next" onClick={() => setI(i + 1)}>下一步</button>
            : <button className="tut-next" onClick={done}>开始建档</button>}
        </div>
      </div>
    </div>
  )
}
