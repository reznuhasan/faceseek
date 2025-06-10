import React from 'react'
import { browserListArr } from '../../DB/BrowserList';
import BrowserCard from '../../component/BrowserCard/BrowserCard';
import "./Email.css"
import avatar from "../../assets/EmailAvatar.png"
import avatar1 from "../../assets/GirlAvatar1.png"
import BreachCards from '../../component/BreachCard/BreachCards';
import Blogs from '../../component/Blogs/Blogs';
const Email = () => {
  const allBrowser = browserListArr;

  return (
    <div className='email-container'>
      <div className='browser-all-card'>
        {
          allBrowser.map((browser,id) => <BrowserCard key={id} browser={browser} />)
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
      <div className='email-data-part'>
        <div >
          <img src={avatar1} alt="" />
        </div>
        <div className='data-alert-content'>
          <h1 className='data-content'>0</h1>
          <h1 className='data-content'>Data Breach Alert</h1>
          <p>Good news — no breaches found! This email address was not found in any of the data breaches listed in Have I Been Pwned. Nothing to worry about!</p>
        </div>
      </div>
      <BreachCards />
      <Blogs/>
    </div>
  )
}

export default Email
