import React, { useContext, useEffect, useState } from 'react'

import "./dashboard.css"
import DashRight from './dashboard_components/dashboardRight/DashRight';
import DashLeft from './dashboard_components/dashboardLeft/DashLeft';

import { allData } from '../../App'

const Dashboard = () => {
  const data = useContext(allData);   // this data is extraced from app.js using useContext hook

  const [highExpenditure, setHighExpenditure] = useState(0);
  const [lowExpenditure, setLowExpenditure] = useState(0);
  // const [highYearExpenditure, setHighYearExpenditure] = useState(0);

  useEffect(() => {
    (function highExpense(data) {
      const arrHigh = [];
      const arrLow = [];

      data.map((item) => {
        arrHigh.push(item.military_expenditure);
        arrLow.push(item.military_expenditure);
      });

      // highest military expenditure 
      const max = arrHigh.reduce((a, b) => Math.max(a, b))
      // Lowest military expenditure
      const min = arrLow.reduce((a, b) => Math.min(a, b))

      setHighExpenditure(max);
      setLowExpenditure(min);
    })(data);
  },[])
  
  return (
    <div className='dashBoard'>

      {/* Passing props to the child components */}
      <DashRight highExpenditure={highExpenditure} lowExpenditure={ lowExpenditure} />
      <DashLeft data={data} />
      
    </div>
  )
}

export default Dashboard;