import React from 'react'
import DemoRadialBar from '../graphs/radialBar';
import DemoTinyArea from '../graphs/TinyLineChart';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import './dashLeft.css'

const DashLeft = () => {

  return (
    <div className='dashBoard__left' >

      {/*====================== Design faster title STARTS ======================*/}
      <div
        className="dashBoard__left-title">
        Design faster
      </div>
      {/*====================== Design faster title ENDS ======================*/}

      {/*====================== card1 STARTS here ======================*/}
      <div className="dashBoard__left-circle__chart">

        <div className='circle__chart-radialChart'>
          <DemoRadialBar />
        </div>
        <div className='circle__chart-heading'>
          Total Earning
        </div>
        <div className='circle__chart-heading__number'>
          $12,875
        </div>
        <div className='circle__chart-heading__subHeading'>
          Compressed to $21,537 last year
        </div>

        <div className='circle__chart-lineChartSection'>
          <div className='circle__chart-lineChartSection__box'>
            <div className='circle__chart-lineChartSection__heading'>
              Presentation
            </div>
            <div className="circle__chart-lineChartSection__amount">
              245
            </div>
            <div className="circle__chart-lineChartSection__lineChart">
              <DemoTinyArea />
            </div>
          </div>

          <div className='circle__chart-lineChartSection__box'>
            <div className='circle__chart-lineChartSection__heading'>
              Development
            </div>
            <div className="circle__chart-lineChartSection__amount">
              753
            </div>
            <div className="circle__chart-lineChartSection__lineChart">
              <DemoTinyArea />
            </div>
          </div>

          <div className='circle__chart-lineChartSection__box'>
            <div className='circle__chart-lineChartSection__heading'>
              Reach & dev
            </div>
            <div className="circle__chart-lineChartSection__amount">
              553
            </div>
            <div className="circle__chart-lineChartSection__lineChart">
              <DemoTinyArea />
            </div>
          </div>
        </div>
      </div>

      {/*====================== card1 ENDS here ======================*/}


      {/*====================== card2 STARTS here ======================*/}
      <div className="dashBoard__left-side-sales">
        {/* Box1 */}
        <div className='dashBoard__left-side-sales-box'>
          <div className="dashBoard__left-side-sales__heading">
            Total Earnings
          </div>
          <div className="dashBoard__left-side-sales__number">
            $12,875 <span className="increase"><CaretUpOutlined style={{ color: "rgb(164, 247, 164)" }} />10%</span>
          </div>
          <div className="dashBoard__left-side-sales__footerText">
            Compared to $21,490 last year
          </div>
        </div>

        {/* Box divider starts */}
        <div className="divider"></div>
        {/* Box divider ends */}

        {/* Box2 */}
        <div className='dashBoard__left-side-sales-box'>
          <div className="dashBoard__left-side-sales__heading">
            Sales
          </div>
          <div className="dashBoard__left-side-sales__number">
            $14,693 <span className="increase"><CaretUpOutlined style={{ color: "rgb(164, 247, 164)" }} />12%</span>
          </div>
          <div className="dashBoard__left-side-sales__footerText">
            Compared to $18,492 last year
          </div>
        </div>
      </div>
      {/*====================== card2 ENDS here ======================*/}



      {/*====================== card3 STARTS here ======================*/}
      <div className="dashBoard__left-miscellaneous">
        <div className="dashBoard__left-miscellaneous__box">
          <div className="miscellaneous__box-heading">Travel</div>
          <div className="miscellaneous__box-number">
            760
          </div>
          <div className="increase">2,540</div>
          <div className="increase__icon"><CaretUpOutlined style={{ color: "green" }} /></div>
        </div>
        <div className="dashBoard__left-miscellaneous__box">
          <div className="miscellaneous__box-heading">Extras</div>
          <div className="miscellaneous__box-number">
            650
          </div>
          <div className="increase">2,540</div>
          <div className="increase__icon"><CaretDownOutlined style={{ color: "red" }} /></div>
        </div>
        <div className="dashBoard__left-miscellaneous__box">
          <div className="miscellaneous__box-heading">Sales</div>
          <div className="miscellaneous__box-number">
            612
          </div>
          <div className="increase">2,540</div>
          <div className="increase__icon"><CaretUpOutlined style={{ color: "green" }} /></div>
        </div>
      </div>
      {/*====================== card3 ENDS here ======================*/}

    </div>

  )
}

export default DashLeft;