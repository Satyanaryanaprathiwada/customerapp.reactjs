import { Component } from 'react'
import { BiCustomize } from "react-icons/bi"
import { FaSearch } from "react-icons/fa"

import './index.css'

class Header extends Component {
  render() {
    return (
    
    <nav className="header-list">
      <BiCustomize className="icon"/>
      <h1 className="logo-heading "> New Project</h1>
      <ul className="nav-list">
        <li>Customer Admin</li>
        <li className='user'>
          <img className='user-profile' src="https://res.cloudinary.com/dkvm2gt6m/image/upload/v1663415676/M-FEJMZ0_400x400_ldptwl.jpg" alt="userpicture"/>
          User #01
        </li>
        <li>
          <FaSearch className='icon-search'/>
        </li>
      </ul>
    </nav>
      
    )
  }
}

export default Header