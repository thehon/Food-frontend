import React from 'react';
import { List, ListItem, Grid, Paper, LinearProgress, Divider } from '@material-ui/core';
const Badges = ({badges, nextBadges}) => {
    var badgearray = [];
    var namearray  = [];
    var nextBadgeArray = [];
    for (var key in badges) {
        badgearray.push({name: key + badges[key], title: key, level: badges[key]});
    }

    for (var key in nextBadges) {
        nextBadgeArray.push({name: key + nextBadges[key], title: key, level: nextBadges[key]});
    }
    var index = -1;
    console.log('nextBadgeArray: ', nextBadges);
    return (           
        <Grid item xs={12} md={6} >
            <Paper style={{paddingBottom: '60px'}}>
                <h2 style={{marginLeft: "6px", marginTop: "6px", marginBottom: "6px"}}>Badges Earned</h2>
                <List style={{display: 'flex', paddingBottom: "30px "}}>
                { badgearray.map((function(item) {
                    index = index + 1;
                    var item2 = nextBadgeArray[index];
                return (
                    <ListItem className="badgeListItem">
                        <div className={"badge " + item.name} />                   
                    <h3>{item.title} </h3>
                    <h3>Level {item.level}</h3>                                
                    
                    <LinearProgress style={{marginTop: "10px"}} variant="determinate" value={item2.level.value}/>
                    <p>{item2.level.value.toFixed(2)}%</p>
                    </ListItem>

                    
                    );
                }))}
                </List>
            </Paper>
        </Grid>
    )
}
export default Badges;