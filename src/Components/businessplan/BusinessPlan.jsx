import React from 'react'
import "./BusinessPlan.css"

const BusinessPlan = () => {
  return (
    <div className='containeri '>
    <div className='title mt-10'>
        <h1 className=''>Select a plan that scales with your Business</h1>
        <button className='btn but text-white'>Sign Up for Free</button>
    </div>
    <div className='cards row'>
        <div className='card'>
        <div className='blue-sec'/>
            <div className='w-fit cursor-pointer ml-2 mt-3 p-2' style={{fontSize:"30px",fontWeight:"bold",color:"white",background:"blue",padding:"5px",borderRadius:"5px"}}>Free</div>
            <div className='ccontents'>
                <ul>
                    <li>Up to 60 minutes of meetings and webinars</li>
                    <li>100 meeting participants & 100 webinar attendees</li>
                    <li>Seamless video conferencing</li>
                    <li>Secure screen sharing</li>
                </ul>
            </div>
        </div>
        <div className='card'style={{backgroundColor:"#FEFFD2"}}>
        <div className='blue-sec'style={{backgroundColor:"#FEEEA9"}}/>
            <div className='w-fit cursor-pointer ml-2 mt-3 p-2' style={{fontSize:"30px",fontWeight:"bold",color:"white",background:"#01204E",padding:"5px",borderRadius:"5px"}}>Meeting</div>
            <span className='ml-2 mt-1 text-sm'>Starts at</span>
            <span className='ml-2 font-bold text-2xl'>₹50/month</span>
            <span className='ml-2 font-bold text-lg'>billed annualy</span>
            <div className='ccontents'>
                <ul>
                    <li>Multiple co-hosts</li>
                    <li>International dial-in</li>
                    <li>Recording & storage</li>
                </ul>
            </div>
        </div>
        <div style={{backgroundColor:"#35374B"}} className='card'>
        <div className='blue-sec' style={{backgroundColor:"#344955"}}/>
            <div className='w-fit cursor-pointer ml-2 mt-3 p-2' style={{fontSize:"30px",fontWeight:"bold",color:"white",background:"#FAA300",padding:"5px",borderRadius:"5px"}}>Webinar</div>
            <span className='ml-2 mt-1 text-sm text-white'>Starts at</span>
            <span className='ml-2 font-bold text-2xl text-orange-500 '>₹200/month</span>
            <span className='ml-2 font-bold text-lg text-orange-500'>billed annualy</span>
            <div className='ccontents text-white'>
                <ul>
                    <li>Multiple co-hosts</li>
                    <li>International dial-in</li>
                    <li>Recording & storage</li>
                </ul>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default BusinessPlan
