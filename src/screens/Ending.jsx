import React from 'react'

// 尾声：黑场 → 「明天」先亮起 → 完整标题
export default function Ending() {
  return (
    <div className="ending">
      <div className="end-no">编号 0079412 · 张小鱼</div>
      <div className="end-alive">她还活着。</div>
      <div className="end-title">
        <span className="end-tomorrow">明天</span>
        <span className="end-rest">会有OC吗</span>
      </div>
      <div className="end-sub">OC = Offer Call</div>
      <div className="end-sub2">明天，还会来。</div>
      <button className="end-btn" onClick={() => window.location.reload()}>再看一遍她的手机</button>
    </div>
  )
}
