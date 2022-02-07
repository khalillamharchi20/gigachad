import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";
import logo from './10.png'
import './navbar.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


const Navbar=({setroute,list})=>{
	useEffect(()=>{
		console.log('nothing')
	},[list])
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
			</ul>
			<div>
			<FontAwesomeIcon icon={faShoppingBag} className="icon">
			</FontAwesomeIcon>
			<span className='badge badge-warning' id='lblCartCount'>{list}</span>
			</div>		
		</div>
		
	)
}
export default Navbar