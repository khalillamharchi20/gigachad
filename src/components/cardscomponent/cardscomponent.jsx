import React from "react";
import './cardscomponent.css'
const Cardscomponent=({user,setroute,onbuy})=>{
    const handlclick=(event)=>{
        onbuy(user)
        setroute('buying')
    }
    return(
        <div className="card" >
            <img src={user.img} className="cardimg" />
            <p >{user.price} DH
            </p>
            <button className="buttoncard" onClick={handlclick} >BUY NOW</button>

        </div>
    )
}
export default Cardscomponent