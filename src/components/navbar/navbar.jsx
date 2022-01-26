import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import logo from './10.png'
import './navbar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar=()=>{
	const [state,setstate]=useState(false)
	const [iconstate,seticon]=useState(faBars)
	const onclick=(event)=>{
		setstate(!state)
		if (state===true){
			seticon(faTimes)

		}
		else{
			seticon(faBars)
		}
	}
	

	return(
		<div className="class flex">
			<img src={logo} className="img" />
			<div className="menu_icon"   >
				<FontAwesomeIcon icon={iconstate} onClick={onclick} >
					
				</FontAwesomeIcon>
				
			</div>
			<ul className={state ? 'nav-menu active':'nav-menu'
			}>
				<li>
					<a href="/" className="nav-links">HOME
					</a>
				</li>
				<li>
					<a href="/products" className="nav-links">PRODUCTS
					</a>
				</li>
				<li>
					<a href="/contactus" className="nav-links">CONTACT US
					</a>
				</li>
			</ul>		
		</div>
	)
}
export default Navbar