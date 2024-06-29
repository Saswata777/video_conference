import React from 'react'
import Sidebar from '../Components/admin/Sidebar'
import Foooter from '../Components/Foooter'

const AdminDashboard = () => {
  return (
    <div >
      <div className='flex'>
      <Sidebar/>
      </div>
      
      <Foooter/>
    </div>
  )
}

export default AdminDashboard
