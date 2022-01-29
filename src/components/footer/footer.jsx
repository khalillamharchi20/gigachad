import React from "react";
import './footer.css'
import logo from './10.png'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer=()=>{
    return(
        <div className="footer gridfooter foot">
            <div className="flex3">
                <h5>Terms & Policies</h5>
                <p>Policies</p>
                <p>Terme Of Use</p>
                <p>Code Of Content</p> 
                <p>Privacy</p>     
            </div>
            <div className="flex3">
                <h5>Company</h5>
                <p>About</p>
                <p>Blog</p>
                <p>Press</p> 
                <p></p>     
                <p></p>
            </div>
            <div className="flex2 copyrights">

                GIGACHAD.com, Inc. All rights reserved
            </div>
            <div className="flex1">
                <img src={logo} className="imgfooter"/>
                <h6>
                    GIGA CHAD 2021
                </h6>
            </div>
        </div>
    )
}
export default Footer