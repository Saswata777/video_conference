import React from 'react'
import eye from "../../Images/eye.png"
import meet from "../../Images/meet.webp"
import users from "../../Images/users.png"
import money from "../../Images/money.png"


const Dashboard = () => {
    const Stats=[
        {
            title:"Total Users",
            logo:users,
            desc: "1.29K"
        },
        {
            title:"Total Views",
            logo:eye,
            desc: "7.52K"
        },
        {
            title:"Total Meetings",
            logo:meet,
             desc: "4.13K"
        },
        {
            title:"Profit",
            logo:money,
             desc: "2.22K"
        },
    ]
  
    return (
        <div className='w-full mx-5'>
            <div className='statCards row '>

                {Stats.map((stat,index)=>(
                    <div class="m-3 w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div class="flex  flex-col items-center justify-center pb-10">
                        {/* <div className='w-24 h-24 mb-3 rounded-full shadow-lg object-cover'>{stat.logo}</div> */}
                        <img class="w-1/3 h-1/3 mb-3 rounded-full mt-4 shadow-lg object-fill" src={stat.logo}   />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{stat.desc}</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{stat.title}</span>
                        
                    </div>
                </div>
                ))}
                

            </div>
            <div className='pie1'>
         

            </div>
        </div>
    )
}

export default Dashboard
