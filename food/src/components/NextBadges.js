import React from 'react';
import { List, ListItem, Grid, Paper, LinearProgress } from '@material-ui/core';
const Badges = ({badges}) => {
    var badgearray = [];
    var namearray  = [];
    for (var key in badges) {
        badgearray.push({name: key + badges[key], title: key, level: badges[key]});
    }
    return (           
        <Grid item xs={12} md={6} >
            <Paper>
                <h2 style={{marginLeft: "6px", marginTop: "6px", marginBottom: "6px"}}>Progress</h2>
                <List style={{display: 'flex', paddingBottom: "30px "}}>
                { badgearray.map((function(item) {
                    console.log('return item: ',item);
                return (
                    <ListItem className="badgeListItem">
                        <div className={"badge " + item.title + item.level.next} />                   
                    <h3>{item.title} </h3>
                    
                    <LinearProgress style={{marginTop: "10px"}} variant="determinate" value={item.level.value}/>
                    <p>{item.level.value.toFixed(2)}%</p>
                    </ListItem>
                    );
                }))}
                </List>
            </Paper>
        </Grid>
    )
}
export default Badges;