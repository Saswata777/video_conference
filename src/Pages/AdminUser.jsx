import React from 'react'
import Sidebar from '../Components/admin/Sidebar'
import User from '../Components/admin/user'
import Foooter from '../Components/Foooter'


const AdminUser = () => {
  return (
    <div >
      <div className='flex'>
        <Sidebar />
        <User />
      </div>
      <Foooter />

    </div>
  )
}

export default AdminUser
