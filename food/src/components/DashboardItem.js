import React, { Component } from 'react';
import RecycleBadge from './RecycleBadge';
import { Grid, Card, Divider, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
const DashboardItem = (number, icon) => {
    return (
        <Grid item xs={2}>
            <RecycleBadge number={number.number} />
            <Card>
                <CardHeader
                    title="Card Title"
                />
                <CardContent>
                    You've Saved heaps of stuff
                </CardContent>
                <CardActions>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}
export default DashboardItem;