import React, { Component, useState, useContext } from 'react';
import Login from './Login';
import { Link } from "react-router-dom";
import Results from '../components/Results';
import SearchBox from '../components/SearchBox';
import Container from '@material-ui/core/Container';
import Snackb from '../components/Snackb';
import Nav from '../components/NavBar';

const Home = () =>  {
    
    const [snackOpen, setSnackOpen ]= useState(false);    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackOpen(false);
      };
    return (
      <>
        <Nav active="Home"/>
        <div class="logo-container">
        </div>
        <div class="branding">
          <h1>Sust</h1>
          <h3>Empowering Sustainable Behaviour</h3>
        </div>
        <Container maxWidth="lg" style={{marginTop: '10vh', marginBottom: "5rem"}}>
            <SearchBox setSnackOpen={setSnackOpen}
                style={{marginBottom: "2rem"}}
            />
            <Results setSnackOpen={setSnackOpen} />
            <Snackb snackOpen={snackOpen} handleClose={handleClose}/>
        </Container>        
        </>
    );
    
}

export default Home;