import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/blog/">BLOG</Link>
                </li>
                <li>
                <Link to="/examples">Examples</Link>
                </li>
                                <li>
                    <Link to="/images/">Images</Link>
                </li>
                <li>
                    <Link to="/products/">PRODS</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
