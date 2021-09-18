import * as React from 'React'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
    } from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return (
        <div className={container}>
            <title> {pageTitle} </title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/">Home</Link></li>
                    <li className={navLinkItem}><Link to="/about">About</Link></li>
                    <li className={navLinkItem}><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>

            <main>
                <h1 className="heading">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout