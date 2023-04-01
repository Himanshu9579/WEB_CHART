import React from 'react'
import './overview.css'
import OverviewLeft from './overview_components/overviewLeft/OverviewLeft';
import OverviewRight from './overview_components/overviewRight/OverviewRight';
import OverviewBottom from './overview_components/overviewBottom/OverviewBottom';


const Overview = () => {
  return (
    <div className='overView'>
          <div className='overView__components'>
              <OverviewLeft />
              <OverviewRight />
      </div>
      
        <div className='OverView__components-barChart'>
          <OverviewBottom />
      </div>
      
    </div>
  )
}

export default Overview;