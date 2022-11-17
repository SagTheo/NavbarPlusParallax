import React, { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Navbar.module.css'

const Navbar = ({bgAttach}) => {
    const [displayNavbar, setDisplayNavbar] = useState(false)

    // To get height of navbar
    // const navbar = useRef()

    // To get height of navbar
    // const showHeight = () => {
    //     console.log(navbar.current.offsetHeight)
    // }
    
    return (
        // To get height of navbar
        // <div className={styles.navbarContainer} ref={navbar} onClick={showHeight}>
        <div className={`${styles.navbarContainer} ${bgAttach ? styles.bgAttach : null}`}>
            {
            displayNavbar ?
                (
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    fill="white" 
                    className={`bi bi-x-lg ${styles.cross}`} 
                    viewBox="0 0 16 16"
                    onClick={() => setDisplayNavbar(false)}
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                )
                :
                (
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    fill="white" 
                    className={`bi bi-list ${styles.menuIcon}`} 
                    viewBox="0 0 16 16"
                    onClick={() => setDisplayNavbar(true)}
                >
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                )
            }

            <div className={`${styles.navbar} ${displayNavbar ? styles.responsiveNav : null}`}>
                <Link to='/' onClick={() => setDisplayNavbar(false)}>Home</Link>
                <Link to='/about' onClick={() => setDisplayNavbar(false)}>About</Link>
                <Link to='/services' onClick={() => setDisplayNavbar(false)}>Services</Link>
                <Link to='/contact' onClick={() => setDisplayNavbar(false)}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar