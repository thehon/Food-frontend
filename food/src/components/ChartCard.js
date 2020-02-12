import React from 'react';
import {Card, CardContent}  from '@material-ui/core/';
import ChartComp from '../components/ChartComp';
const ChartCard = ({yourValue, theirValue, measurement, fill}) => {
    return (
        <Card>
            <ChartComp style={{padding: '100px', marginRight: '10px'}} yourValue={yourValue} theirValue={theirValue} fill={fill}/>
            <CardContent style={{padding:'10px', marginBottom: '12px'}}>
                You have saved <b>{yourValue.toFixed(2)} {measurement}</b> of food from being wasted!<br></br>
                Your local community has saved <b>{theirValue.toFixed(2)}{measurement}</b>
            </CardContent>
        </Card>
    )
}

export default ChartCard;