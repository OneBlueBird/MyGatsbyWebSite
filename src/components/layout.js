import * as React from 'React'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
    } from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
                                query {
                            site {
                                id
                                siteMetadata {
                                    title
                                    description
                                    siteUrl
                                }
                            }
                            }
    `
    )

    return (
        <div className={container}>
            <title> {pageTitle} | {data.site.siteMetadata.title} </title>
            <header className={siteTitle}> {data.site.siteMetadata.title} </header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/">Home</Link></li>
                    <li className={navLinkItem}><Link to="/about">About</Link></li>
                    <li className={navLinkItem}><Link to="/blog">Blog</Link></li>
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