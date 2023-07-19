import * as React from 'react';
import Container from '@mui/material/Container';
import Header from './header';
import MainContainer from '../editor';
export default function landing() {
  return (
    <React.Fragment>
      <Container maxWidth="xl" className='container-code-editor'>
       <Header/>
       <MainContainer/>
      </Container>
    </React.Fragment>
  );
}