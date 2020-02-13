import React from 'react';
import { List, ListItem, Grid, Paper } from '@material-ui/core';
const Badges = ({badges}) => {
    var badgearray = [];
    var namearray  = [];
    for (var key in badges) {
        badgearray.push({name: key + badges[key], title: key, level: badges[key]});
    }
    return (           
        <Grid item xs={12} md={6} >
            <Paper style={{paddingBottom: '10px'}}>
                <h2 style={{marginLeft: "6px", marginTop: "6px", marginBottom: "6px"}}>Badges Earned</h2>
                <List style={{display: 'flex', paddingBottom: "30px "}}>
                { badgearray.map((function(item) {
                return (
                    <ListItem className="badgeListItem">
                        <div className={"badge " + item.name} />                   
                    <h3>{item.title} </h3>
                    <h3>Level {item.level}</h3>
                    
                    </ListItem>
                    );
                }))}
                </List>
            </Paper>
        </Grid>
    )
}
export default Badges;