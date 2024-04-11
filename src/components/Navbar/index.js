import React, { useState } from 'react';
import logo from '../../logo.svg';

import { links } from '../../data'
import './index.css'

import SocialIcaon from '../Social';
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from 'react-router-dom'


const Navbar = () => {


    const [toggle, setToggle] = useState(false);
    const [cssClass, setCssClass] = useState('removeclass');

    const setToggleHandler = () => {
        setToggle(!toggle);
        if (toggle === false) {
            setCssClass('addclass');
        } else if (toggle === true) {
            setCssClass('removeclass')
        }
    }

    const LinkHandler = () => {
        setToggle(!toggle);
        if (toggle === false) {
            setCssClass('addclass');
        } else if (toggle === true) {
            setCssClass('removeclass')
        }
    }

    return (
        <>
            <div className='Container shadow'>
                <div className='logo'><img src={logo} /></div>
                <div className='NavContainer'>
                    {
                        links.map((nav) => {
                            return <ul key={nav.id}>
                                {/* <a href={nav.url}> {nav.text}</a> */}
                                <li ><Link to={nav.url}> {nav.text}</Link> </li>

                            </ul>
                        })
                    }
                </div>
                <div className='icons'><SocialIcaon /></div>
                <div className='toggleMenu' > <button onClick={setToggleHandler}><AiOutlineMenu /></button></div>
            </div>



            <div>

                <div className={`mobileNavbar ${cssClass}`}>
                    {
                        links.map((nav) => {
                            return <ul key={nav.id}>
                                {/* <a href={nav.url}> {nav.text}</a> */}
                                <li ><Link to={nav.url} onClick={LinkHandler}> {nav.text}</Link> </li>

                            </ul>
                        })
                    }
                    <div className='iconMobile'><SocialIcaon /></div>

                </div>
            </div>


        </>)
}

export default Navbar