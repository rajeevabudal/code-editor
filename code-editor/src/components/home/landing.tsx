import * as React from 'react';
import Container from '@mui/material/Container';
import Header from './header';

export default function landing() {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
       <Header/>
      </Container>
    </React.Fragment>
  );
}