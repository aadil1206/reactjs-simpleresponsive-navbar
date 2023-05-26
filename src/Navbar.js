import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [new1 ,setnew1]=useState(true);
  const oncg=()=>{
    setnew1(!new1)
  }
  return (
    <div className='conto'>
     <div className="l1"><a href="#" className="l12">WebSite Name</a></div>
     <div className="list">
      <ul className={new1?"list1":"list1  close"}>
        <li className="a1"><a href="#" className="a12 active">Pricing</a></li>
        <li className="a1"><a href="#" className="a12">Features</a></li>
        <li className="a1"><a href="#" className="a12">About</a></li>
        <li className="a1"><a href="#" className="a12">Contact</a></li>
      </ul>
      
     </div>
     <button onClick={oncg} className="but">change</button>

    </div>

  )
}

export default Navbar
