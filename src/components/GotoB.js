import React from 'react'
import { useNavigate } from "react-router-dom";


const GotoB = () => {

//------------------------------------------
const navigate = useNavigate();
//------------------------------------------

  return (
    <div>
  <h1>It is (GotoB) Component</h1>
  <h4>We are Using Navigate from react-router-dom for move one to other Component</h4>
  <p>1.import useNavigate from react-router-dom</p>
  <p>2.declare variable and save there useNavigate</p>
  <p>3.create a button with onClick function and gave the right path</p>
  <p>4.import this component to app.js</p>
  <p>5.set it in routers</p>
  <p>6.gave a navitem link in Navbar</p>

  {/* --------------------------------------------------------------------------- */}
  <button className="btn btn-success" onClick={()=>{navigate('/goto')}}>(Goto) Component</button>

  <button className="btn btn-primary ms-2" onClick={()=>{navigate('/home')}}>Home</button>
{/* --------------------------------------------------------------------------- */}
    </div>

  )
}

export default GotoB
