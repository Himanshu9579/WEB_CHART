import React from 'react'
import DemoColumn from '../graphs/BarChart';

import './overviewBottom.css'

const OverviewBottom = () => {
  return (
    <div className='overView__bottom' >
      <div className="bottom__salesNumber">
        <div className='bottom__salesNumber-title'>Sales Figures</div>
        <div className='bottom__salesNumber-amount'>$10,430</div>
      </div>
      <div className="bottom__barChart">
        <DemoColumn />
      </div>
    </div>
  )
}

export default OverviewBottom;