import React, { useState } from "react"
import Navbar from "./components/navbar/navbar"
import Hero1 from "./components/hero1/hero1"
import Card from "./components/cards/card"
import Form from "./components/form/form"
import Footer from "./components/footer/footer"
import Buycomponent from "./components/buycomponent/buycomponent"
const App=()=>{
  const[atricle,setarticle]=useState({
    index:0,
    img:"",
    price:0
  })
  const[contact,setcontact]=useState({
    firstname:'',
    lastname:'',
    email:'',
    text:''

  })
  const contactus=(msg)=>{
    setcontact({
      firstname:msg.firstname,
      lastname:msg.lastname,
      email:msg.email,
      text:msg.text

    })
  }
  const onbuy=(atricle)=>{
    setarticle({
      index:atricle.index,
      img:atricle.img,
      price:atricle.price
    })

  }
  const[route,setroute]=useState('home')
  const set_route=(route)=>{
    setroute(route)
  }
  if (route==='home'){
    return(

    <div>
      <Navbar setroute={set_route} />
      <Hero1 setroute={set_route} />
      <Form contactus={contactus} />
      <Footer />
    </div>
    )
    }
  if(route==='clothes'){
    return(
      <div>
        <Navbar setroute={set_route}/>
        <Card setroute={set_route} onbuy={onbuy} />
        <Footer />
      </div>
    )
  }
  if(route==='buying'){
    return(
      <div>
        <Navbar setroute={set_route}/>
        <Buycomponent/>
        <Footer />
      </div>
    )
  }
  

}
export default App