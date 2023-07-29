import * as React from 'react';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import Sheet from '@mui/joy/Sheet';
import Header from './header';
import MainContainer from '../editor';
export default function Landing() {
  let value;
  // setTimeout(()=>{
    
   value = useSelector((state:any)=>state.getValue.value);
    console.log(value);
  //  }, 3000)
  
 
  return (
    <React.Fragment>
      <Container maxWidth="xl" className='container-code-editor'>
       <Header/>
  
       <MainContainer/>
       <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>{value}</Sheet>
      </Container>
    </React.Fragment>
  );
}