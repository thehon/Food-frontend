import React, { Component, useState, useContext } from 'react';
import Nav from '../components/NavBar';
import Container from '@material-ui/core/Container';

const Dashboard = () => {
    return (
        <>
        <Nav />
        <Container maxWidth="lg" style={{marginTop: '25vh', marginBottom: "5rem"}}>
            Dashboard
        </Container>
        </>
    );
}
export default Dashboard;