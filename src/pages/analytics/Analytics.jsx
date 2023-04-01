import React from 'react'
import working from '../assets/working.svg'

const Analytics = () => {
  return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <img src={working} alt="working" />
          <p style={{ fontWeight: "700", color: "#383874", fontSize: "2rem" }}>PAGE IS UNDER CONSTRUCTION</p>
          <p style={{fontWeight:"400", fontSize:".8rem"}}>💜 Thank you for your patience</p>
    </div>
  )
}

export default Analytics;