import React from 'react'

const BreachCard = ({breach}) => {
  return (
    <div className="breachcard">
    <div className="breachcard-header">
      <img src={breach.logo} alt={breach.name} className="breachcard-logo" />
      <div>
        <h3>{breach.name}</h3>
        <span className="breachcard-category">{breach.category}</span>
      </div>
      <div className='breachcard-box'>  
      <div className="breachcard-arrow">↗</div>
      </div>
    </div>
    <p className="breachcard-description">{breach.description}</p>
    <div className="breachcard-compromised">
      <strong>Compromised Data</strong>
      <ul>
        {breach.compromised.map((item, index) => (
         <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default BreachCard
