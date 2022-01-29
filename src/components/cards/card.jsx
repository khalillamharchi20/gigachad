import React from "react";
import Cardscomponent from "../cardscomponent/cardscomponent";
import { atricles } from "../articles";
import './card.css'

const Card=({setroute,onbuy})=>{

    const array=atricles.map((user,index)=>{
        return(
            <Cardscomponent user={user} setroute={setroute} onbuy={onbuy}>
            </Cardscomponent>
        )
    })
    return(
        <div  className="grid-wrapper">
            {array}
            
        </div>
    )
   
}
export default Card