import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import logo from './10.png'
import './navbar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { counter } from "@fortawesome/fontawesome-svg-core";

const Navbar=({setroute})=>{
	const [state,setstate]=useState(false)
	const [iconstate,seticon]=useState(faBars)
	const onclick=(event)=>{
		setstate(!state)
		if (state===true){
			seticon(faBars)

		}
		else{
			seticon(faTimes)
		}
	}
	const onchange=(event)=>{
        setroute('home')
    }
	

	return(
		<div className="class flex">
			<img src={logo} className="img" />
			<div className="menu_icon"   >
				<FontAwesomeIcon className="icon" icon={iconstate} onClick={onclick} >
					
				</FontAwesomeIcon>
				
			</div>
			<ul className={state ? 'nav-menu active':'nav-menu'
			}>
				<li>
					<a href="/" className="nav-links" onClick={onchange}>HOME
					</a>
				</li>
				<li>
					<a href="/" className="nav-links" >SUPPORT
					</a>
				</li>
			</ul>
			<FontAwesomeIcon icon={faShoppingBag} className="icon">

			</FontAwesomeIcon>		
		</div>
		
	)
}
export default Navbar