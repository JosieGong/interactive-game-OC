import React from 'react'
import { useGame } from '../game/store.jsx'
import { SHOP_CART, SHOP_ORDERS } from '../data/content.js'
import Clue from '../components/Clue.jsx'

export default function ShopApp() {
  const { state } = useGame()
  const cart = SHOP_CART.filter(x => !x.phase || x.phase <= state.phase)
  return (
    <div className="appview shop-app">
      <div className="nav shop-nav">
        <span className="nav-title">网购</span>
      </div>
      <div className="scroll">
        <div className="shop-profile">
          <span className="avatar lg" style={{ background: '#ffd9c2' }}>🐟</span>
          <div>
            <div className="shop-name">小鱼吐泡泡</div>
            <div className="shop-sub">会员第 7 年 · 收货地址 1 个</div>
          </div>
        </div>

        {cart.length > 0 && (
          <>
            <div className="shop-label">购物车（{cart.length}）</div>
            {cart.map(item => (
              <Clue key={item.id} id={item.clue || item.cluePart} block>
                <div className="order cart-item">
                  <span className="order-pic">{item.e}</span>
                  <div className="order-mid">
                    <div className="order-title">{item.title}</div>
                    <div className="order-note">{item.note}</div>
                  </div>
                  <div className="order-right">
                    <div className="order-price">{item.price}</div>
                    <div className="order-state wait">未结算</div>
                  </div>
                </div>
              </Clue>
            ))}
          </>
        )}

        <div className="shop-label">我的订单</div>
        {SHOP_ORDERS.filter(o => !o.phase || o.phase <= state.phase).map((o, i) => {
          const row = (
            <div className="order">
              <span className="order-pic">{o.e}</span>
              <div className="order-mid">
                <div className="order-title">{o.title}</div>
                <div className="order-note">{o.date}</div>
              </div>
              <div className="order-right">
                <div className="order-price">{o.price}</div>
                <div className="order-state" style={o.stateColor ? { color: o.stateColor } : null}>{o.state}</div>
              </div>
            </div>
          )
          const clueId = o.clue || o.cluePart
          return clueId
            ? <Clue key={i} id={clueId} block>{row}</Clue>
            : <div key={i}>{row}</div>
        })}
      </div>
    </div>
  )
}
