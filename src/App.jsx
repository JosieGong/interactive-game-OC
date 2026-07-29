import React, { useEffect, useState } from 'react'
import { useGame } from './game/store.jsx'
import { Boot, Intro } from './screens/Boot.jsx'
import Home from './screens/Home.jsx'
import Tutorial from './screens/Tutorial.jsx'
import Ending from './screens/Ending.jsx'
import MessagesApp from './apps/Messages.jsx'
import PhotosApp from './apps/Photos.jsx'
import NotesApp from './apps/Notes.jsx'
import AIApp from './apps/AI.jsx'
import ShopApp from './apps/Shop.jsx'
import WalletApp from './apps/Wallet.jsx'
import ResumeApp from './apps/Resume.jsx'
import { StatusBar, HomeBar, Banners, Toast, Modal, StarFab, CollectionSheet, DragLayer } from './components/System.jsx'

const APPS = {
  messages: MessagesApp, photos: PhotosApp, notes: NotesApp,
  ai: AIApp, shop: ShopApp, wallet: WalletApp, resume: ResumeApp,
}

export default function App() {
  const { state, frameRef, scaleRef } = useGame()
  const [fit, setFit] = useState({ scale: 1, fill: false })

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const fill = w <= 520 && h > w        // 手机竖屏：铺满
      const scale = fill ? 1 : Math.min(1, (w - 16) / 375, (h - 16) / 812)
      scaleRef.current = fill ? 1 : scale
      setFit({ scale, fill })
    }
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [scaleRef])

  const CurApp = state.app ? APPS[state.app] : null
  const booting = state.stage === 'boot' || state.stage === 'intro'
  const dark = state.app === 'ai' || state.app === 'wallet'

  // 收藏夹拖拽模式：在简历表单页可拖入板块
  let sheetDraggable = null
  if (state.app === 'resume' && state.resumeTab === 'form') {
    if (!state.submitted1) sheetDraggable = { form: 'form1' }
    else if (state.phase >= 2 && !state.submitted2) sheetDraggable = { form: 'form2' }
  }

  return (
    <div className={'stage' + (fit.fill ? ' stage-fill' : '')}>
      {!fit.fill && <div className="stage-caption">明天会有OC吗</div>}
      <div
        className={'phone bg-' + (state.app || 'home') + (fit.fill ? ' phone-fill' : '')}
        ref={frameRef}
        style={fit.fill ? null : { transform: `scale(${fit.scale})` }}
      >
        {state.stage === 'boot' && <Boot />}
        {state.stage === 'intro' && <Intro />}
        {!booting && state.stage !== 'ending' && (
          <>
            <StatusBar dark={dark} />
            <div className="screen-body">
              {CurApp ? <CurApp /> : <Home />}
            </div>
            <HomeBar dark={dark} />
            {state.stage === 'play' && state.resumeChat !== 'boss' && <StarFab />}
            {state.stage === 'play' && <CollectionSheet draggable={sheetDraggable} />}
            <DragLayer />
            <Banners />
            <Toast />
            <Modal />
            {state.stage === 'tutorial' && <Tutorial />}
          </>
        )}
        {state.stage === 'ending' && <Ending />}
      </div>
    </div>
  )
}
