import React, { useEffect } from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";
import { imgService } from '../services/imgService';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/user.actions';

export function AppHeader() {
    const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)
    const logoUrl= 'https://res.cloudinary.com/dii16awkb/image/upload/v1685878172/%D7%9C%D7%95%D7%92%D7%95_fpn8ig.jpg'
    
    const dispatch = useDispatch()
    useEffect(() => {
        
    }, [loggdingUser])
    
    const onLogout = () => {
        dispatch(logout()) 
    }
    return (

        <>
            <header className="app-header full grid ">
                <section className="btn-signin-container flex">
                    <Link to="/signup-page">
                        <button className="signup-btn">
                            {
                            loggdingUser?
                            <img src={loggdingUser.imgUrl} className="sign-in-img" />:
                            <img src={imgService.getImg('user')} className="sign-in-img" />
                            }
                            {loggdingUser?<span onClick={onLogout}>Logout</span>:<span>Sign In</span>}
                            </button>
                    </Link>
                </section>
                <div className='header-content-container flex-sb'>
                <div className="logo-container ">
                    <Link  className='logo-link flex' to="/"><img className='logo' src={logoUrl} />
                    </Link>
                </div>
                <nav className="main-menu flex clean">
                  {loggdingUser?  <li className='link-container flex-jc-ac'>
                        <NavLink className="heaer-link" to="/my-courses">My Courses</NavLink></li>:""}
                    <li className='link-container flex-jc-ac'>
                        <NavLink className="heaer-link" to="/about"> About</NavLink></li>
                </nav>

                </div>
            </header>

        </>

    )
}

