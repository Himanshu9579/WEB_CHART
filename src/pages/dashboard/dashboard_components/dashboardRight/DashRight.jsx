// import React, { useState } from 'react'
import './dashRight.css'

import { AiOutlineEye } from 'react-icons/ai'
import { RiGlobalLine } from 'react-icons/ri'
import { MdBarChart } from 'react-icons/md'
import DemoScatter from '../graphs/BubbleChart'

const DashRight = ({ highExpenditure, lowExpenditure }) => {

    return (
        <div className='dashBoard__right'>

            {/*============ timeline ============*/}
            <div className="dashBoard__right-timeline__title">
                timeline
            </div>
            <div className="dashBoard__right-timeline">
                <span>1W</span>
                <span>1M</span>
                <span>3M</span>
                <span>1Y</span>
                <span>All</span>
            </div>

            {/*============ Circle ============*/}
            <div className="dashBoard__right-parent__circle">
                <div className="dashBoard__right-child__circle"></div>
            </div>

            {/*=========== bubble-chart ============*/}
            <div className="bubbleChart" style={{ position: "absolute", width: "60%", height: "80%", top: "15%" }}>
                <DemoScatter />
            </div>

            {/*============ informers ============*/}
            <div className="dashBoard__right-informer">
                <div className="dashBoard__right-informer__component shoppingViews">
                    <div className='icon'>
                        <AiOutlineEye style={{ fontSize: "15px", color: "#023AFF" }} />
                    </div>
                    <p className='title'>HIGHEST EXPENDITURE</p>
                    <p className='number'>${highExpenditure}</p>
                </div>
                <div className="dashBoard__right-informer__component trendGoods">
                    <div className='icon'>
                        <RiGlobalLine style={{ fontSize: "15px", color: "#023AFF" }} />
                    </div>
                    <p className='title'>TOTAL COUNTRY DATA</p>
                    <p className='number'>204</p>
                </div>
                
                <div className="dashBoard__right-informer__component storeDynamics">
                    <div className='icon'>
                        <MdBarChart style={{ fontSize: "15px", color: "#023AFF" }} />
                    </div>
                    <p className='title'>LOWEST EXPENDITURE</p>
                    <p className='number'>${lowExpenditure}</p>
                </div>
            </div>



        </div>
    )
}

export default DashRight;