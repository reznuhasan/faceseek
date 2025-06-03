import React from 'react'
import "./BrowserCard.css"
const BrowserCard = ({browser}) => {
    const {img,name,content}=browser;
  return (
    <div className='browser-card-component'>
      <div className='browser-logo'>
        <img src={img}/>
      </div>
      <div className='browser-content'>
        <h1 className='browser-name'>{name}</h1>
        <p className='browser-content-type'>{content}</p>
      </div>
         
    </div>
  )
}

export default BrowserCard
