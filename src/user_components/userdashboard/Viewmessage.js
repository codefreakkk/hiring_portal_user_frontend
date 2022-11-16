import React from 'react'
import { NavLink } from 'react-router-dom';
import back from "../../images/previous.png";

function Viewmessage() {
  return (
    <>
         <div className=''>
         <NavLink to="../messages">
          <span>
            {" "}
            <img
              src={back}
              style={{ marginRight: "12px", cursor: "pointer" }}
              height="18"
            />
          </span>
          </NavLink>
            <span style={{fontSize: '18px', fontWeight: '700'}}>Infosys</span>
            <div className='mt-3'>
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh harsh sachin 
                said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh harsh sachin 
                said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                harsh sachin said harsh sachin said harsh sachin shar shj kjsdfhkjsh 
                
            </div>
        </div>
    </>
  )
}

export default Viewmessage