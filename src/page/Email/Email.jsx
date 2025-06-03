import React from 'react'
import { browserListArr } from '../../DB/BrowserList';
import BrowserCard from '../../component/BrowserCard/BrowserCard';
import "./Email.css"
const Email = () => {
    const allBrowser=browserListArr;

  return (
    <div className='email-container'>
      <div className='browser-all-card'>
       {
        allBrowser.map(browser=><BrowserCard browser={browser}/>)
       }
      </div>
    </div>
  )
}

export default Email
