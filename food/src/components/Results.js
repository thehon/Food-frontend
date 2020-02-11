import React, { Component, useContext } from 'react';
import { Context } from '../context/FoodContext';
import ResultCard from './ResultCard';
import Grid from '@material-ui/core/Grid';

const Results = ({ setSnackOpen }) => {
    const { state } = useContext(Context);
    
    if (state.recipeResults.length !== 0) {
        console.log('recipe results: ', state.recipeResults);
        return (
        <Grid container spacing={2}>
            {state.recipeResults.map(function(item) {
                 return (
                 <Grid item xs={12} md={3}>
                    <ResultCard result={item} setSnackOpen={setSnackOpen}/>
                 </Grid>
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