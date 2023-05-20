import React from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";



export function AppHeader() {
    const logoUrl= 'https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg?compress=1&resize=800x600&vertical=top'
    return (
        <>
            <header className="app-header full grid ">
                <section className="btn-signin-container flex">
                    <Link to="/signup-page">
                        <button className="signup-btn">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOiD85vBVv50sGbhWjBtJbUqZE2DMalycOk1TDSB2DICsj7En5X8BfKqHrK7nfJwfo98&usqp=CAU" className="sign-in-img" />
                            Sign In</button>
                    </Link>
                </section>
                <div className='header-content-container flex-sb'>
                <div className="logo-container flex-jc-ac">
                    <Link  className='logo-link flex' to="/"><img className='logo' src={logoUrl} />
                    <span className='slogan'>Connection NLP</span></Link>
                </div>
                <nav className="main-menu flex clean">
                    <li className='link-container flex-jc-ac'>
                        <NavLink className="heaer-link" to="/courses"> Courses</NavLink></li>
                    <li className='link-container flex-jc-ac'>
                        <NavLink className="heaer-link" to="/about"> About</NavLink></li>
                </nav>

                </div>
            </header>

        </>

    )
}

