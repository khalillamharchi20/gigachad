import React from "react";
import './hero1.css'
import logo from './giga.jpeg'
const Hero1=({setroute})=>{
    const onclick=(event)=>{
        console.log(logo)
        setroute('clothes')
    }
    return(
        <div className="hero1 hero2">
                <h3 className="clr">
                THE GIGA CHAD STORE IS 
                </h3>
                <h3 className="clr">
                NOW OFFICIALLY OPEN !
                </h3>
                <br/>
                <br/>
                <p className="clr">
                    Take a look at our beautifull created collection of clothes
                </p> 
                <p className="clr">
                    Made with current style culture and fashion
                </p> 
                <br/>
                <br/>
                <button className="button"  onClick={onclick} >EXPLORE OUR COLLECTION

                </button>
        </div>
    )
}
export default Hero1