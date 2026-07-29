import React from 'react'
import { useGame } from '../game/store.jsx'
import { WALLET_BILLS, WALLET_MONTH } from '../data/content.js'
import Clue from '../components/Clue.jsx'

export default function WalletApp() {
  const { state } = useGame()
  return (
    <div className="appview wallet-app">
      <div className="nav wallet-nav">
        <span className="nav-title">钱包 · 账单</span>
      </div>
      <div className="scroll">
        <div className="wallet-card">
          <div className="wc-label">账户余额</div>
          <div className="wc-balance">¥ 237.16</div>
          <div className="wc-month">
            <span>本月支出 <b>{WALLET_MONTH.out}</b></span>
            <span>本月收入 <b>{WALLET_MONTH.in}</b></span>
          </div>
        </div>
        {WALLET_BILLS.map(day => (
          <div key={day.day} className="bill-day">
            <div className="bill-day-name">{day.day}</div>
            {day.items.filter(x => !x.phase || x.phase <= state.phase).map((x, i) => {
              const row = (
                <div className="bill">
                  <span className="bill-pic">{x.e}</span>
                  <div className="bill-mid">
                    <div className="bill-title">{x.title}</div>
                    <div className="bill-time">{x.time}</div>
                  </div>
                  <div className={'bill-amt' + (x.in ? ' in' : '')}>{x.amt}</div>
                </div>
              )
              return x.clue
                ? <Clue key={i} id={x.clue} block>{row}</Clue>
                : <div key={i}>{row}</div>
            })}
          </div>
        ))}
        <div className="bill-end">仅显示最近 30 天账单</div>
      </div>
    </div>
  )
}
