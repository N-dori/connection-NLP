import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, withRouter } from "react-router-dom";
import { imgService } from '../services/imgService';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/user.actions';
import { svgService } from '../services/svg.service';
import { ShoppingCartSvg } from '../svgs/ShoppingCartSvg';
export function AppHeader({len}) {
    const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
    const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
    const logoUrl= 'https://res.cloudinary.com/dii16awkb/image/upload/v1685878172/%D7%9C%D7%95%D7%92%D7%95_fpn8ig.jpg'
    const [isShown, setIsShown] = useState(false)
    const dispatch = useDispatch()
    const naviget = useNavigate()
    useEffect(() => {
        setIsShown(false)
    }, [loggdingUser])
 

    
    const onLogout = () => {
        dispatch(logout()) 
    }
    const toggelMenu = () => {
        setIsShown(!isShown)
    }
  
    return (

        <>
            <header className="app-header full grid ">
                <section className='action-btns flex'>
                <ShoppingCartSvg len={len} loggdingUser={loggdingUser} onClick={()=>naviget('/shopping-cart')}/>
            {
                loggdingUser?
                <section className='user-space'>
                    <img className='user-img' onClick={toggelMenu} src={loggdingUser.imgUrl} alt="user-image"/>
                    <div className={isShown?'user-menu  block':'user-menu hidden'}>
                        <p className='logout-link flex-jc-ac' onClick={onLogout}>Logout</p>
                    </div>
                </section>:
                <> 
                <section className="btn-signin-container flex">
                    <Link to="/login" className='under-line-none'>
                        <button className="signup-btn login-btn flex-jc-ac">
                           <span >Log in</span>
                            </button>
                    </Link>
                  
                </section>
                <section className="btn-signin-container flex">
                    <Link to="/signup" className='under-line-none'>
                        <button className="signup-btn flex-jc-ac">
                           <span >Sign up</span>
                            </button>
                    </Link>
                  
                </section>
               
                </>
            }

                </section>
                <div className='header-content-container flex-ac'>
                <div className="logo-container ">
                    <Link  className='logo-link flex' to="/"><img className='logo' src={logoUrl} />
                    </Link>
                </div>
                <nav className="main-menu flex clean">
                  {loggdingUser?  <li className='link-container flex-jc-ac'>
                        <NavLink className="heaer-link" to="/my-courses">My Courses</NavLink>
                    </li>:""
                  }
                    <li className='link-container flex-jc-ac'>
                        <NavLink className='about-link under-line-none' to="/about">
                           <span >About Us</span>
                          </NavLink>
                    </li>
                </nav>

                </div>
            </header>

        </>

    )
}

