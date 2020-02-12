import React, { Component, useState, useContext, useEffect } from 'react';
import Nav from '../components/NavBar';
import {Container, Grid, Card, CardHeader, CardContent}  from '@material-ui/core/';
import DashboardItem from '../components/DashboardItem';
import { Context } from '../context/FoodContext';

import { teal, yellow, lightBlue } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChartCard from '../components/ChartCard';
import History from '../components/History';

const Dashboard = () => {

    const { state, Dashboard } = useContext(Context);
    useEffect(() => {
        Dashboard();
    },[]);
    
    

    
    return (
        <>
        <Nav />
        <Container maxWidth="lg" style={{marginTop: '25vh', marginBottom: "5rem"}}>
            <Grid container spacing={3}>
            
                    
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.kgsaved} theirValue={state.dashboard.data.avg_kgsaved} fill={teal[400]} measurement="grams" title="Weight of Food Saved"/>
                : <div class="circle-center"><CircularProgress /></div>
            }
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.co2saved} theirValue={state.dashboard.data.avg_co2saved} fill={lightBlue[600]} measurement="kg's" title="Amount of C02 Saved"/>
                : <div class="circle-center"><CircularProgress /></div>
            }
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.dollarsaved} theirValue={state.dashboard.data.avgdollarsaved} fill={yellow[600]} measurement="dollars"title="$ Saved"/>
                : <div class="circle-center"><CircularProgress /></div>
            }
        </Grid>
        { state.dashboard.length !== 0 ?
            <History history={state.dashboard.data.history} />
            : <div class="circle-center"><CircularProgress /></div>
        }
        
            
            
            
        </Container>
        </>
    );
    
}
export default Dashboard;