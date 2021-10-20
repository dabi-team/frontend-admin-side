import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.scss';
import {BsCart3} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai'

const Navbar = () =>{
  const location = useLocation();
  const signedin = true;
    return(
      <div className='nav-container '>
        <nav className='main-nav'>
          <div className='flex'>
              <a>
                  <Link to='/'>DABI</Link>
              </a>
          </div>
          <div className="nav-links">
              <a>
                  <Link className={(location.pathname === '/')? 'active':''} to="/">Discover</Link>
              </a>
              <a>
                  <Link className={(location.pathname === '/Categories')? 'active':''} to="/Categories">Categories</Link>
              </a>
              <a>
                  <Link className={(location.pathname === '/Art')? 'active':''} to="/Art">Your Orders</Link>
              </a>
          </div>
          <div className="flex">
                  {signedin?
              <div className='flex flex-row'> 
                        <Link to='/Cart' className='flex flex-row5' >
                            <BsCart3 className={(location.pathname === '/Cart')? ' icon pb-5 active':'icon pb-5'}/>
                        </Link>
                        <Link to='/Wishlist' className='flex flex-row5' >
                            <AiOutlineHeart className={(location.pathname === '/Wishlist')? ' icon pb-5 active':'icon pb-5'}/>
                        </Link>
                    <a>
                        <Link to='/Account'>Account</Link>
                    </a>
              </div>
              :
              <a>
                  <Link to='/Login'>SignIn</Link>
              </a>
                }
          </div>
        </nav>
        </div>
    )
}

export default Navbar;