import React from 'react';
import {Card, CardContent, Grid, CardHeader, Paper}  from '@material-ui/core/';
import ChartComp from '../components/ChartComp';
const ChartCard = ({yourValue, theirValue, measurement, fill1, fill2, title}) => {
    yourValue = yourValue + 0.001;
    theirValue = theirValue + 0.001;

    return (
        <Grid item xs={12} md={4}>
            <Card className="chartcard">
                <CardHeader
                    title={title}
                />
                <div className="chart-holder">
                    <ChartComp style={{padding: '100px', marginRight: '10px'}} yourValue={yourValue} theirValue={theirValue} fill1={fill1} fill2={fill2}/>
                </div>
                <CardContent style={{padding:'10px', marginBottom: '12px'}}>
                <Grid container spacing={2} >
                    <Grid item xs={6} style={{height: "10px"}}>
                        <Paper className="dashboard-paper" style={{padding: "4px", backgroundColor: fill2, color: 'white'}}>
                            <p><b>You</b> </p>
                            <h3>{yourValue.toFixed(2)}</h3>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} style={{height: "10px"}}>
                        <Paper className="dashboard-paper" style={{padding: "4px", backgroundColor: fill1, color: 'white'}}>
                            <b>Community</b><br></br><h3><b>{theirValue.toFixed(2)}</b> </h3>
                            </Paper>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ChartCard;