import React, { Component, useState, useContext, useEffect } from 'react';
import Nav from '../components/NavBar';
import {Container, Grid, Card, CardHeader, CardContent, Paper}  from '@material-ui/core/';
import DashboardItem from '../components/DashboardItem';
import { Context } from '../context/FoodContext';

import { teal, yellow, lightBlue, amber } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChartCard from '../components/ChartCard';
import History from '../components/History';
import Badges from '../components/Badges';
import NextBadges from '../components/NextBadges';

const Dashboard = () => {

    const { state, Dashboard } = useContext(Context);
    useEffect(() => {
        Dashboard();
    },[]);

    console.log('dashboard state: ',state);
    return (
        <>
        <Nav active="Dashboard" />
        <Container maxWidth="lg" style={{marginTop: '5vh', marginBottom: "5rem"}}>
            <Grid container spacing={3}>
            
                    
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.kgsaved} theirValue={state.dashboard.data.avg_kgsaved} fill1={teal[200]} fill2={teal[400]} measurement="grams" title="Food Saved (kg)"/>
                : <Grid item xs={4} ><Card><div class="circle-center"><CircularProgress /></div></Card></Grid>
            }
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.co2saved} theirValue={state.dashboard.data.avg_co2saved} fill1={lightBlue[100]} fill2={lightBlue[600]} measurement="kg's" title="CO2 Saved (kg)"/>
                : <Grid item xs={4} ><Card><div class="circle-center"><CircularProgress /></div></Card></Grid>
            }
            {state.dashboard.length !== 0 ? 
                <ChartCard yourValue={state.dashboard.data.dollarsaved} theirValue={state.dashboard.data.avgdollarsaved} fill1={amber[300]} fill2={yellow[800]} measurement="dollars"title="Money Saved ($AUD)"/>
                : <Grid item xs={4} ><Card><div class="circle-center"><CircularProgress /></div></Card></Grid>
            }
            { state.dashboard.length !== 0 ?
            <Badges badges={state.dashboard.data.badges} nextBadges={state.dashboard.data.next_badges} />
            : <Grid item xs={6} ><Paper><div class="circle-center" style={{marginTop: '40px'}}><CircularProgress /></div></Paper></Grid>
            }
            
        
        { state.dashboard.length !== 0 ?
            <History history={state.dashboard.data.history} />
            : <Paper><div class="circle-center" style={{marginTop: '40px'}}><CircularProgress /></div></Paper>
        }
        

        </Grid>

        
            
            
            
        </Container>
        </>
    );
    
}
export default Dashboard;