import React from 'react';
import {Card, CardContent, Grid, CardHeader}  from '@material-ui/core/';
import ChartComp from '../components/ChartComp';
const ChartCard = ({yourValue, theirValue, measurement, fill, title}) => {
    yourValue = yourValue + 0.001;
    theirValue = theirValue + 0.001;

    return (
        <Grid item xs={12} md={4}>
            <Card className="chartcard">
                <CardHeader
                    title={title}
                />
                <div className="chart-holder">
                    <ChartComp style={{padding: '100px', marginRight: '10px'}} yourValue={yourValue} theirValue={theirValue} fill={fill}/>
                </div>
                <CardContent style={{padding:'10px', marginBottom: '12px'}}>
                    You have saved <b>{yourValue.toFixed(2)} {measurement}</b> of food from being wasted!<br></br>
                    Your local community has saved <b>{theirValue.toFixed(2)}{measurement}</b>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ChartCard;