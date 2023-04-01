import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BiTrendingUp } from 'react-icons/bi';
import { RiVipCrownLine } from 'react-icons/ri';
import { MdBarChart } from 'react-icons/md';
import { RingProgress } from '@ant-design/plots';
import './overviewLeft.css'

const OverviewLeft = () => {
    
    // Functions for two progress rings
    const DemoRingProgress1 = () => {
        const config = {
            height: 100,
            width: 100,
            autoFit: false,
            percent: 0.27,
            color: ['#023AFF', '#D3D8DE'],
        };
        return <RingProgress {...config} />;
    };
    const DemoRingProgress2 = () => {
        const config = {
            height: 100,
            width: 100,
            autoFit: false,
            percent: 0.67,
            color: ['#00B929', '#D3D8DE'],
        };
        return <RingProgress {...config} />;
    };


    return (
        <div className='overView__left' >

            {/*=================== Title STARTS ======================*/}
            <p className="overView__left-title">
                WSTF FRONT-END HACKATHON
            </p>

            {/*=================== Card2 STARTS ======================*/}
            <div className="overView__left-amount">
                <div className="overView__left-amount__box1">
                    All users <span> DETAILS <MdKeyboardArrowRight style={{fontSize:"11px",position:"relative", top:"2px"}}/></span>
                </div>
                <div className="overView__left-amount__box2">
                    2,431,340
                </div>
            </div>
            {/*=================== Card2 ENDS ======================*/}

            {/*=================== Card3 INDICATOR STARTS ======================*/}
            <div className="overView__left-side__indicators">
                <div className="overView__left-side__indicators-box">
                    <div className='indicator' style={{ background:"#8676FF"}}>
                        <BiTrendingUp style={{color:"white", fontSize:"1.3rem"}}/>
                    </div>
                    
                    <div>
                        <p>Total earning</p>
                        <p>540,549</p>
                    </div>
                </div>

                <div className="overView__left-side__indicators-box">
                    <div className='indicator' style={{ background: "#66C8FF" }}>
                        <RiVipCrownLine style={{ color: "white", fontSize: "1.3rem" }} />
                    </div>

                    <div>
                        <p>Sales</p>
                        <p>1,205,677</p>
                    </div>
                </div>

                <div className="overView__left-side__indicators-box">
                    <div className='indicator' style={{ background: "#FF9066" }}>
                        <MdBarChart style={{ color: "white", fontSize: "1.3rem" }} />
                    </div>

                    <div>
                        <p>Purchase</p>
                        <p>48,430,039</p>
                    </div>
                </div>
                
            </div>
            {/*=================== Card3 INDICATOR ENDS ======================*/}

            {/*=================== Progess Ring STARTS ======================*/}
            <div className="overView__left-dough">
                <div className='overView__left-dough__box1' >
                    <div className='dough'>{DemoRingProgress1()}</div>
                    <div>
                        <p>92,980</p>
                        <p className='dough__title'>Active users</p>
                    </div>
                </div>
                <div className='overView__left-dough__box2' >
                    <div className='dough'>{DemoRingProgress2()}</div>
                    <div>
                        <p>22,652</p>
                        <p className='dough__title'>New users</p>
                    </div>
                </div>
            </div>
            {/*=================== Progess Ring END ======================*/}
        </div>
    )
}

export default OverviewLeft;