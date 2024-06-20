import React from 'react'

export default function Foooter() {
  return (
    <div>
       <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Video Conference App. All rights reserved.</p>
    </footer>
    </div>
  )
}