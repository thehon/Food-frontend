import React, { Component, useContext, useState } from 'react';
import { Context } from '../context/FoodContext';
import ResultCard from './ResultCard';
import Grid from '@material-ui/core/Grid';

const Results = ({ setSnackOpen }) => {
    const { state } = useContext(Context);
    
    if (state.recipeResults !== undefined) {
        
        return (
        <Grid container spacing={2}>
            {state.recipeResults.map(function(item) {
                 return (
                    <ResultCard result={item} setSnackOpen={setSnackOpen}/>
                 );
            }
        )}
        </Grid>    
        )    
    }
    return (
        < > </>
    )
    
}
export default Results;