import React from 'react'
import { browserListArr } from '../../DB/BrowserList';
import BrowserCard from '../../component/BrowserCard/BrowserCard';
import "./Email.css"
import avatar from "../../assets/EmailAvatar.png"
const Email = () => {
    const allBrowser=browserListArr;

  return (
    <div className='email-container'>
      <div className='browser-all-card'>
       {
        allBrowser.map(browser=><BrowserCard browser={browser}/>)
       }
      </div>
      <div className='email-alert-part'>
        <div className='alert-content'>
             <h1 className='red-content'>12</h1>
             <h1 className='red-content'>Data Breach Alert</h1>
             <p> Your email address has appeared in a known data breach. Check the details below to find out where and how your information may have been compromised.</p>
        </div>
        <div >
            <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Email
