import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Button ,Typography} from '@mui/material'

const AddSubbtn = () => {
    const[count,setCount]= useState(0);
    const AddCount=()=>
    {
        setCount(count+1)
    }

    const MinusCount=()=>
    {
        setCount(count-1)
    }
   
  return (
    <>
     <Typography pt={2} sx={{color:'#73879C',lineHeight:'1.5',fontFamily:'sans-serif'
            ,whiteSpace:'normal'}}>
                $210.00 x {count} <span style={{color:'#d91470'}}>{count * 210}</span>
            </Typography>



      <Box sx={{mt:'1.5rem'}} display={'flex'}>
            <Box>
               <Button onClick={MinusCount} sx={{ color:'#d42c6a'}}>-</Button>
             </Box>

 {/* number to be increased/decreased */}
                  <Box sx={{fontSize:'18px'}}>
                     {count}
                    </Box>

                <Box>
                <Button onClick={AddCount} sx={{color:'#d42c6a' ,padding:'3px',
                   }}>+</Button>
                   </Box>  
                 </Box>
    </>
  )
}

export default AddSubbtn
