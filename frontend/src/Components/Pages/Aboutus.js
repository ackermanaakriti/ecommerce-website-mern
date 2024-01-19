import React, { useState } from 'react'
import Test from '../Test'



const Aboutus = () => {
  const [open,setopen] = useState(true)
  const handleclick =()=>
  {
    setopen(!open)
  }

  return (

    <>
    <button  className='' disabled onClick={handleclick} >Click me</button>
    {open&&
    <div>hello ther</div>}
    
    </>
  
  )
}

export default Aboutus