import React from 'react'
import { useAuth } from '../../Global/context/contextauth'
import Test from '../Test'

const Aboutus = () => {
    const [auth,setAuth]= useAuth()
  return (

    <div>{JSON.stringify(auth)}
      <Test/></div>
  
  )
}

export default Aboutus