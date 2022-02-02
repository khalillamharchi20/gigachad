import React from "react";
import Cardscomponent from "../cardscomponent/cardscomponent";
import { atricles } from "../articles";
import './card.css'

const Card=({setroute,onbuy,articleadd})=>{

    const array=atricles.map((user,index)=>{
        return(
            <Cardscomponent user={user} setroute={setroute} onbuy={onbuy} articleadd={articleadd}>
            </Cardscomponent>
        )
    })
    return(
        <div >
            <div  className=" grid-wrapper">
            {array}
            
        </div>
        </div>
    )
   
}
export default Card