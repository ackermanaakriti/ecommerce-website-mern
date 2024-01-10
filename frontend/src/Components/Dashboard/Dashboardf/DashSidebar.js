import React from 'react'
import './Dashboard.scss'
import { Link } from 'react-router-dom'

const DashSidebar = () => {
  return (
   <>
      <div className='dashsidebar--wrapper'>
        <ul>
            <li>Dashboard</li>
            <li>Product
                <ul>
                  <Link to='/products'>
                   <li>Product List</li>
                   </Link>
                   <Link to='/createproduct'>
                   <li>Create Product</li>
                   </Link>
                </ul>
                 </li>
                 <li>Category
                <ul>
                 
                   <Link to='/createcategory'>
                   <li>Category List</li>
                   </Link>
                </ul>
                 </li>
                 <li>Profile</li>
        </ul>
      </div>
      
   </>
  )
}

export default DashSidebar