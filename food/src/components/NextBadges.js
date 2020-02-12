import React from 'react';
import { List, ListItem, Grid, Paper } from '@material-ui/core';
const NextBadges = ({badges}) => {
    console.log('next badges: ', badges);
    return (           
        <Grid item xs={12} >
            <Paper>
                <h2 style={{marginLeft: "6px", marginTop: "6px"}}>Next Badges!</h2>
                <List>
                { badges.map(function(item) {
                return (
                    <ListItem className="badgeListItem">
                        <div className={"badge next badge" + item} />                   
                        <h3>{item}</h3>
                    </ListItem>
                    );
                })}
                </List>
            </Paper>
        </Grid>
    )
}
export default NextBadges;