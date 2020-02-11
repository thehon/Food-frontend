import React, { Component, useState, useContext } from 'react';
import Nav from '../components/NavBar';
import Container from '@material-ui/core/Container';
import DashboardItem from '../components/DashboardItem';

const Dashboard = () => {
    return (
        <>
        <Nav />
        <Container maxWidth="lg" style={{marginTop: '25vh', marginBottom: "5rem"}}>
            <DashboardItem number={120} />
        </Container>
        </>
    );
}
export default Dashboard;