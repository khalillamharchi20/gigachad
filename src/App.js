import React, { useState } from "react"
import Navbar from "./components/navbar/navbar"
import Hero1 from "./components/hero1/hero1"
import Card from "./components/cards/card"
import Form from "./components/form/form"
import Footer from "./components/footer/footer"
const App=()=>{
  const [list,setlist]=useState([])
  const[lenlist,setlenlist]=useState(0)
  const add=(article)=>{
    
    const newValue={
      img: article.img,
      name:article.name,
      price:article.price,
      size:article.size
    }
    setlist(list=>[...list,newValue]
      )
    console.log(list)
    setlenlist(list.length)
    console.log(lenlist)
    }

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
      <Navbar setroute={set_route} list={lenlist} />
      <Hero1 setroute={set_route} />
      <Form contactus={contactus} id="contactus" />
      <Footer />
    </div>
    )
    }
  if(route==='clothes'){
    return(
      <div>
        <Navbar setroute={set_route} list={lenlist}/>
        <Card setroute={set_route} onbuy={onbuy} articleadd={add} />
        <Footer />
      </div>
    )
  }
 
  

}
export default App