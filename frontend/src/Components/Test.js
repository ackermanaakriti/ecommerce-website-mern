import React,{useState}from 'react'
import axios from 'axios'


const Test = () => {

    const[photo,setphoto]= useState('')
    console.log(photo)

    const hanldeSubmit = async()=>
    {


        // const formData = new FormData();
        // formData.append('image',photo)

        console.log('hello')
        try{   const res = await axios.post("http://localhost:8020/forimg",
        photo )
        console.log('phtot submitted')
      
      
      }
        
        catch(err)
        {
            console.log(err)
        }
     

    }


  return (
    <>
    <input onChange={e=>setphoto(e.target.files[0])} type='file'/>
    <button type='submit'onSubmit={hanldeSubmit}>OK</button>
    </>
  )
}

export default Test