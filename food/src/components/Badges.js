import React from 'react';
import { List, ListItem, Grid, Paper } from '@material-ui/core';
const Badges = ({badges}) => {
    return (           
        <Grid item xs={12} >
            <Paper>
                <h2 style={{marginLeft: "6px", marginTop: "6px"}}>Badges Earned</h2>
                <List style={{display: 'flex', paddingBottom: "30px "}}>
                { badges.map(function(item) {
                return (
                    <ListItem className="badgeListItem">
                        <div className={"badge badge" + item} />                   
                        <h3>{item}</h3>
                    </ListItem>
                    );
                })}
                </List>
            </Paper>
        </Grid>
    )
}
export default Badges;