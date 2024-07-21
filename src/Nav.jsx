import React from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from './Dropdown';
function Nav() {
  return (
    <div className='WholeNavbar'>
        <div className="Dummy">
            <div className="dummyleft">
            <span>Sell on Pepperfry</span>
            <span>Become a Franchisee</span>
            <span>Buy in Bulk</span>
            <span>Find a Studio</span>
            </div>
        </div>
        <div className="navbar">
            <div className="topnav">
                <div>
                <input type="text" placeholder='scarch' />
                </div>
                <div className='logo'>
                    <img src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg" alt="" />
                </div>
                <div className='icon.Div'>
                   <PersonIcon className='icon' />
                   <HomeIcon className='icon' />

                        < FavoriteIcon className='icon'/>
                        < ShoppingCartIcon className='icon' />
                        
                </div>

            </div>
        </div>
       < Dropdown />
    </div>
  )
}

export default Nav
