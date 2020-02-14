import React, { Component, useContext, useState } from 'react';
import { Context } from '../context/FoodContext';
import ResultCard from './ResultCard';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

const Results = ({ setSnackOpen }) => {
    const { state } = useContext(Context);
    console.log('state: , ', state);
    
    if (state.recipeResults.length !== 0 ) {
        
        return (
        <Grid container spacing={2}>
            {state.recipeResults.map(function(item) {
                 return (
                    <ResultCard result={item} setSnackOpen={setSnackOpen}/>
                 );
            }
        )}
        </Grid>    
        );    
    } 
    if (state.searchIngredients.length === 0) {
        return (
            <></>
        )
    } else {
        return (
            <CircularProgress className="spinner"> </CircularProgress>
        )
    }

    
    
}
export default Results;