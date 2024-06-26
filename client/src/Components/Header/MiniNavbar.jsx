import React from 'react'
import { Link } from 'react-router-dom'

function MiniNavbar() {
  return (
    <div className='w-full flex items-center justify-between h-10 bg-slate-200 drop-shadow-lg'>
        <ul className='flex items-center justify-between w-full px-80'>
            <li>
                <Link to="/yoga-store">Yoga Store</Link>
            </li>
            <li>
                <Link to="/ayurveda-store">Ayurveda Store</Link>
            </li>
        </ul>
    </div>
  )
}

export default MiniNavbar