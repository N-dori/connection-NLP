import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/user.actions';
import { ShoppingCartSvg } from '../svgs/ShoppingCartSvg';
import { userService } from '../services/userService';
import { MobileMenuSvg } from '../svgs/MobileMenuSvg';

export function AppHeader({ isActive, toggelMobileMenu,  len }) {

    const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
    const logoUrl = 'https://res.cloudinary.com/dii16awkb/image/upload/v1685878172/%D7%9C%D7%95%D7%92%D7%95_fpn8ig.jpg'
    const [isShown, setIsShown] = useState(false)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const naviget = useNavigate()

    useEffect(() => {
        console.log('loggdingUser app header useeffect',loggdingUser );
        // setIsShown(false)
        loadUser()
    }, [loggdingUser, user])
    
 
    const loadUser = async () => {
        if (!loggdingUser) {
            return
        } 
        if(user?._id === loggdingUser?._id ){
            return
        }/* else {
            if (user) {
                return
            } */
           //as the app load guest is beening signup, here we getting the logged in user 
           //if it is the id of guest we keep the local state (user) as null
            const currUser = await userService.getUserById(loggdingUser._id)
            if(!currUser){
                console.log('Header loadUser currUser in side',loggdingUser)
                setUser(loggdingUser)
                     return
            }else{
                setUser(currUser)
            }
        }
    // }

    const onLogout = () => {
        setTimeout(() => {
            dispatch(logout())
            setUser(null)
            naviget('/our-courses')
            toggelMenu()
        }, 500);
    }

    const toggelMenu = () => {
        setIsShown(!isShown)
    }
  
    return (
        <>
            <header  className="app-header full grid ">
                <section className='action-btns flex'>
                    <ShoppingCartSvg len={len} loggdingUser={loggdingUser} onClick={() => naviget('/shopping-cart')} />
                    {
                        user ?
                        user._id !== '64abe02a8723e73efc4d4be8'?
                            <section className='user-space'>
                                <div className='user-img-container flex-jc-ac' onClick={toggelMenu} >
                                    <span className='user-img'>{user.fname[0].toUpperCase()}</span>

                                </div>
                                <div className={isShown ? 'user-menu  block' : 'hidden'}>
                                    <p className='logout-link flex-jc-ac' onClick={onLogout}>צא מהחשבון</p>
                                </div>
                            </section> :
                            <>
                                <section className="btn-signin-container flex">
                                    <Link to="/login" className='no-under-line'>
                                        <button className="signup-btn login-btn flex-jc-ac">
                                            <span >התחברות</span>
                                        </button>
                                    </Link>

                                </section>
                                <section className="btn-signin-container flex">
                                    <Link to="/signup" className='no-under-line'>
                                        <button className="signup-btn flex-jc-ac">
                                            <span className='txt' >הרשמה</span>
                                        </button>
                                    </Link>

                                </section>

                            </>:
                            <>
                                <section className="btn-signin-container flex">
                                    <Link to="/login" className='no-under-line'>
                                        <button className="signup-btn login-btn flex-jc-ac">
                                            <span >התחברות</span>
                                        </button>
                                    </Link>

                                </section>
                                <section className="btn-signin-container flex">
                                    <Link to="/signup" className='no-under-line'>
                                        <button className="signup-btn flex-jc-ac">
                                            <span className='txt' >הרשמה</span>
                                        </button>
                                    </Link>

                                </section>
                            
                            </>
                    }

                </section>
                <div className='header-content-container flex-ac'>
                    
                    <MobileMenuSvg isActive={isActive} toggelMobileMenu={toggelMobileMenu}/>
                   <section className='mobile-shopping-cart-container'>
                    <ShoppingCartSvg len={len} loggdingUser={loggdingUser} onClick={() => naviget('/shopping-cart')}/>

                   </section>
                    <nav className="main-menu flex clean">
                        {loggdingUser ?
                                loggdingUser.courses.length ?
                                <li className='link-container flex-jc-ac'>
                                        <NavLink className="heaer-link" to="/my-courses">הקורסים שלי</NavLink>
                                    </li> : ''
                                : ""  
                            }
                            {loggdingUser?
                            loggdingUser.isAdmin?<NavLink className="heaer-link" to="/dashboard">ניהול מערכת</NavLink> :''
                        :""   
                        }
                   
                    </nav>
                    <div className="logo-container ">
                        <Link className='logo-link flex' to="/our-courses"><img className='logo' src={logoUrl} />
                        </Link>
                    </div>

                </div>
            </header>

        </>

    )
}


