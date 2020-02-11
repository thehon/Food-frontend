import React, { Component, useState, useContext } from 'react';
import Login from './Login';
import { Link } from "react-router-dom";
import Results from '../components/Results';
import SearchBox from '../components/SearchBox';
import Container from '@material-ui/core/Container';
import Snackb from '../components/Snackb';
import Nav from '../components/NavBar';

const Home = () =>  {
    const [ searchItems, setSearchItems ] = useState([]);
    const [snackOpen, setSnackOpen ]= useState(false);    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackOpen(false);
      };
    return (
      <>
        <Nav />
        <Container maxWidth="lg" style={{marginTop: '25vh', marginBottom: "5rem"}}>
            <SearchBox searchItems={searchItems} setSearchItems={setSearchItems} setSnackOpen={setSnackOpen}
                style={{marginBottom: "2rem"}}
            />
            <Results setSnackOpen={setSnackOpen} />
            <Snackb snackOpen={snackOpen} handleClose={handleClose}/>
        </Container>        
        </>
    );
    
}

export default Home;