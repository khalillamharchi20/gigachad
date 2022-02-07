import React, { useEffect, useState } from "react";
import './cardscomponent.css'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "bootstrap";
const Cardscomponent=({user,setroute,onbuy,articleadd})=>{
    const [size1,setsize1]=useState(false)
    const [size2,setsize2]=useState(false)
    const [size3,setsize3]=useState(false)
    const resize=(event)=>{
        setsize1(!size1)
        setsize2(false)
        setsize3(false)
        console.log(size1,size2,size3)
    }
    const resize1=(event,size)=>{
        setsize1(false)
        setsize2(!size2)
        setsize3(false)
        console.log(size1,size2,size3)
    }
    const resize2=(event)=>{
        setsize1(false)
        setsize2(false)
        setsize3(!size3)
    }
    const check=(event)=>{
        if(size1 === false && size2 === false && size3 === false){
            return(true)
        }
        else{
            return(false)
        }
    }
    const add=(event)=>{
        if(check()){
        }
        else{
            if(size1){
                articleadd({
                    img: user.img,
                    name:user.desc,
                    price:user.price,
                    size:"S"
                })
            }
            if(size2){
                articleadd({
                    img: user.img,
                    name:user.desc,
                    price:user.price,
                    size:"M"
                })
            }
            if(size3){
                articleadd({
                    img: user.img,
                    name:user.desc,
                    price:user.price,
                    size:"L"
                })
            }
        }
    }
    
    return(
        <div className="card" >
            <img src={user.img} className="cardimg" />
                    <p >{user.desc}</p>
                    <p className="price">{user.price} MAD</p>
                    <div className="flexsize">
                    <div className="gridsize sizes">
                        <p className={size1? 'boxsize2':'boxsize'} onClick={resize} >S</p>
                        <p className={size2? 'boxsize2':'boxsize'} onClick={resize1} >M</p>
                        <p className={size3? 'boxsize2':'boxsize'} onClick={resize2} >L</p>
                    </div>
                    </div>
                    <div className={check() ? "changed" : "flexsize2"} onClick={add} >
                        <p ></p>
                        <FontAwesomeIcon className="iconbuy"  icon={faShoppingCart}></FontAwesomeIcon>
                    </div>
        </div>
    )
}
export default Cardscomponent