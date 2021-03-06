import React, { useState } from 'react'
import style from './Nav.module.scss'
import { Link } from 'react-scroll'

export const NavLink = ({ to, children }) => <Link activeClass={style.nav_link__active} className={style.nav_link} to={to} spy={true} hashSpy={true} smooth={true} duration={1000}>{children}</Link>

const Nav = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <nav className={style.navbar + ' navbar navbar-expand-md navbar-light bg-light'} data-aos="fade-down" data-aos-delay={500}>
            <a className={style.navbar_brand} href="/">yunisdev<span className="dot">.</span></a>
            <button className={style.menu + (menuOpened ? ' ' + style.opened : '') + ' navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={menuOpened} aria-label="Toggle navigation" onClick={() => { setMenuOpened(!menuOpened) }}>
                <svg viewBox="0 0 100 100">
                    <path className={style.line1} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className={style.line2} d="M 20,50 H 80" />
                    <path className={style.line3} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className={style.navbar_nav + " navbar-nav"}>
                    <li className={style.nav_item + ' nav-item '}>
                        <NavLink to="hello" className={style.nav_link__active}>Hello</NavLink>
                    </li>
                    <li className={style.nav_item + ' nav-item'}>
                        <NavLink to="about">About Me</NavLink>
                    </li>
                    <li className={style.nav_item + ' nav-item'}>
                        <NavLink to="skills">Skills</NavLink>
                    </li>
                    <li className={style.nav_item + ' nav-item'}>
                        <NavLink to="projects">Projects</NavLink>
                    </li>
                    <li className={style.nav_item + ' nav-item'}>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav