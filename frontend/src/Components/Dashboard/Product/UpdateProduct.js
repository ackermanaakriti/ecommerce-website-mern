import { Container } from '@mui/material'
import React,{useState} from 'react'
import './product.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const CreateProduct = () => {
    const { id } = useParams(); 
    

    const [formdata,setFormdata]=useState({
        name:'',
        description:'',
        brand:"",
         image:'',
         price:'',
       stock:'',
         
     })

    useEffect(() => {
        axios.get('http://localhost:8020/product/${id}')
        .then(result => setToOasis(result.data.allproducts))
        .catch(err => console.log(err))
    }, [])

  
const hanldeChange=(e)=>
{
     const {name,value}=e.target;
    setFormdata ({...formdata,[name]:value})
    console.log(formdata)
    
}
const hanldeSubmit=(e)=>
    {
      e.prevent.default();
       axios.post('http://localhost:8020/product/${id}',formdata)
       .then(result=>{
        console.log(result)
       }) 
       .catch(err=>console.log(err))  
    }
  return (
    <>
     <div className='createproduct--wrapper'>
        <Container>
            <div className='createprodform-wrapper'>
                <form>
                  <div className='form-div'>
                    <label>Product Name :</label>
                    <input name='name'  onChange={hanldeChange}></input>
                    <label>Product Category:</label>
                    <input name='category' onChange={hanldeChange} />
                    </div>
                    <div className='form-div'>
                    <label>Product Brand :</label>
                    <input name='brand' onChange={hanldeChange} ></input>
                    <label>Product Price:</label>
                    <input type="number" name='price' onChange={hanldeChange} />
                    </div>
                    
                    <div className='form-div'>
                    <label>Description :</label>
                    <textarea name='description' onChange={hanldeChange} placeholder='Description of Product' cols='40' rows={8}></textarea>
                    </div>
                    <div className='form-div'>
                      <label>Stock:</label>
                      <input type="number" name='stock' onChange={hanldeChange}></input>
                      <label>Image:</label>
                      <input  name='image'type='file'></input>
                    </div>
                    <button onClick={hanldeSubmit}>Submit</button>
                </form>
            </div>
        </Container>
     </div>
    </>
  )
}

export default CreateProduct