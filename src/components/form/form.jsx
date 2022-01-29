import { event } from "jquery";
import React from "react";
import './form.css'

const Form=({contactus})=>{

    const get_data=(event)=>{
        var msg={
            firstname:event.target.firstname.value,
            lastname:event.target.lastname.value,
            email:event.target.email.value,
            text:event.target.text.value
        
          }
        contactus(msg)
        
    }
    return(
    <div className="container ">
        <div className="text"> Contact us </div>
        <form action="#" onSubmit={get_data}>
           <div className="form-row">
              <div className="input-data">
                 <input type="text" name="firstname" required />
                 <div className="underline"></div>
                 <label htmlFor="">First Name</label>
              </div>
              <div className="input-data">
                 <input type="text" name="lastname"  required />
                 <div className="underline"></div>
                 <label htmlFor="">Last Name</label>
              </div>
           </div>
           <div className="form-row">
              <div className="input-data">
                 <input type="text" name="email" required />
                 <div className="underline"></div>
                 <label htmlFor="">Email Address</label>
              </div>
           </div>
           <div className="form-row">
              <div className="input-data textarea">
                 <textarea rows="8" cols="80" name="text" required></textarea>
                 <br />
                 <div className="underline"></div>
                 <label htmlFor="">Write your message</label>
                 <br />
                 <div className="form-row submit-btn">
                    <div className="input-data">
                       <div className="inner"></div>
                       <input type="submit" value="submit" />
                    </div>
                 </div>
              </div>
           </div>
        </form>
     </div>
    )

}
export default Form