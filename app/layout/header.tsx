import { Link, useLocation, useNavigate } from "@remix-run/react";
import React from "react";
import styles from "../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Header() {
    const [show, setShow] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const onShow = ()=>{
        setShow((state)=>!state)
    }

    const onNavigate = (to:string)=>{
        setShow(false)
        navigate(to)
    }

    const isActive = (path:string)=> location.pathname === path ? 'active-menu':''
    console.log(location);
    console.log(isActive('/'))
    return (
        <header id="site_header" className="header">
            <div className="header-content clearfix">
                <div className="text-logo">
                    <Link to="/">
                        <div className="logo-symbol">NS</div>
                        <div className="logo-text">Gumede</div>
                    </Link>
                </div>
                <div className={`site-nav ${!show ? 'mobile-menu-hide':''}`}>
                    <ul id="menu-classic-menu" className="leven-classic-menu site-main-menu">
                        <li id="menu-item-160" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home current_page_ancestor menu-item-has-children menu-item-160 ${isActive('/')}`}>
                            <span onClick={()=>onNavigate('/')}>About Me</span>
                        </li>
                        <li id="menu-item-174" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-174 ${isActive('/resume')}`}>
                            <span onClick={()=>onNavigate('/resume')} data-hover="1">Resume</span></li>
                        <li id="menu-item-28" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-28 ${isActive('/portfolio')}`}>
                            <span onClick={()=>onNavigate('/portfolio')} data-hover="1">Portfolio</span>
                        </li>
                        <li id="menu-item-191" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-191 ${isActive('/contact')}`}>
                            <span onClick={()=>onNavigate('/contact')} data-hover="1">Contact</span>
                        </li>
                    </ul>
                </div>
                <a className="menu-toggle mobile-visible" onClick={onShow}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
        </header>
    )
}