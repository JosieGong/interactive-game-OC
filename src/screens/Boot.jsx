import React, { useEffect, useState } from 'react'
import { useGame } from '../game/store.jsx'

// 第一幕：hello 开机动画 → 背景与规则 → 进入教程
export function Boot() {
  const { dispatch } = useGame()
  const [fade, setFade] = useState(false)
  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 3400)
    const t2 = setTimeout(() => dispatch({ type: 'STAGE', stage: 'intro' }), 4200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [dispatch])
  return (
    <div className={'boot' + (fade ? ' boot-out' : '')}>
      <svg viewBox="0 0 300 120" className="hello-svg">
        <text x="150" y="78" textAnchor="middle" className="hello-text">hello</text>
      </svg>
    </div>
  )
}

export function Intro() {
  const { dispatch } = useGame()
  return (
    <div className="intro">
      <div className="intro-halo" />
      <div className="intro-card">
        <div className="intro-tag">天堂档案馆 · 档案员须知</div>
        <h1 className="intro-title">今日建档对象</h1>
        <div className="intro-no">编号 0079412 · 张小鱼</div>
        <p className="intro-p">
          张小鱼是一个研二的学生，最近正在忙着找工作。
        </p>
        <p className="intro-p">
          看看她的手机，<b>长按收藏</b>重要的信息，完成她的简历吧～
        </p>
        <div className="intro-rules">
          <span>· 全程不离开这台手机</span>
          <span>· 不能打字，只能点击、滑动、长按、拖拽</span>
          <span>· 从屏幕底部上滑，随时回到主屏幕</span>
        </div>
        <button className="intro-btn" onClick={() => dispatch({ type: 'STAGE', stage: 'tutorial' })}>
          解锁她的手机
        </button>
      </div>
    </div>
  )
}
