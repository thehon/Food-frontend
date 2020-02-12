import React, { Component, useState, useContext, useEffect } from 'react';
import Nav from '../components/NavBar';
import {Container, Grid, Card, CardHeader, CardContent}  from '@material-ui/core/';
import DashboardItem from '../components/DashboardItem';
import { Context } from '../context/FoodContext';

import { teal } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChartCard from '../components/ChartCard';

const Dashboard = () => {

    const { state, Dashboard } = useContext(Context);
    useEffect(() => {
        Dashboard();
    },[state.dashboard]);
    
    

    
    return (
        <>
        <Nav />
        <Container maxWidth="lg" style={{marginTop: '25vh', marginBottom: "5rem"}}>
            <Grid item xs={12} md={4}>
            
                    
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.kgsaved} theirValue={state.dashboard.data.avg_kgsaved} fill={teal[400]} measurement="grams"/>
                : <div class="circle-center"><CircularProgress /></div>
            }
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.co2saved} theirValue={state.dashboard.data.avg_co2saved} fill={teal[600]} measurement="kg's"/>
                : <div class="circle-center"><CircularProgress /></div>
            }
            
            </Grid>
            
        </Container>
        </>
    );
    
}
export default Dashboard;