import React, { useState, useContext } from 'react';
import { CardContent, CardActions, IconButton, ListItem, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Tooltip, TableCell, TableBody, Table, Chip, List, CardMedia, CardHeader, Card, TableHead, TableRow, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import ShareIcon from '@material-ui/icons/Share';
import { red, yellow, green } from '@material-ui/core/colors';
import { Context } from '../context/FoodContext';

const useStyles = makeStyles(theme => ({
    root: {
      //maxWidth: 345,
      //minWidth: 275
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    right: {
      justifyContent: 'right'
    },
    healthList: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
    },
    healthItem: {
      display: 'contents',
      marginLeft: "2", 
      color: 'red'
    },
    dangerItem: {
      backgroundColor: 'orange',
      color: 'white'
    },
    cardHeader: {
      cursor: 'pointer'
    },
    healthChip: {
      border: "2px solid lightgreen",
      color: 'lightgreen',
      backgroundColor: 'white'
    },
    expansionPanelDetails: {
      paddingLeft: "2px",
      paddingRight: "2px"
    },
    matchItem: {
      border: '2px solid mediumPurple',
      color: 'mediumPurple',
      backgroundColor: 'white'
    }
  }));
const ResultCard = ({result, setSnackOpen}) => {
    const [ expanded, setExpanded ] = useState(false);
    const [ grown, setGrown ] = useState('shrunk');
    const [ visible, setVisible ] = useState('visible');
    const { Cooked } = useContext(Context);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const classes = useStyles();
    const recipe = result.recipe;

    const handleRemove = () => {
      if (visible === 'visible') {
        setVisible('invisible');
      } else {
        setVisible('visible');
      }
    }
    const handleExpand = () => {
      if (grown === 'grown') {
        setGrown('shrunk');
      } else {
        setGrown('grown');
      }
    }
    return (
      <Grid item xs={12} md={4} className={grown + ' ' + visible}>
        <Card className={classes.root} style={{position: 'relative'}}>
          <div className="small-grid">
            <CardHeader
                title={recipe.label}
                subheader={recipe.totalTime !== 0 ? 'Time (minutes): ' + recipe.totalTime : 'Time (minutes): 32'}
                className={classes.cardHeader}
                onClick={handleExpand}
                />
            <CardMedia
              className={classes.media + ' recipeimage'}
              image={recipe.image}
              title={recipe.label}
              onClick={handleExpand}
            />
            <CardContent style={{order: 3}}>
              <List className={classes.healthList }>
                    <List className="card-header-icons">
                  {recipe.match.map(function(caut) {
                  if (caut !== '') {
                  return (
                    <ListItem className={classes.healthItem + " healthChip"}>
                      <Chip
                        onDelete
                        deleteIcon={<DoneIcon />}
                        label={caut}
                        key={caut}
                        className={classes.matchItem}
                      />
                    </ListItem>
                    )
                    }})}
                    </List>
              </List>
              { result.description }
            </CardContent>
            </div>
            <CardActions  style={{justifyContent: 'space-between'}}>
              <IconButton >
                <Tooltip title="Share">
                  <ShareIcon/>
                  </Tooltip>
              </IconButton>
              <IconButton >
                <Tooltip title="Mark as cooked">
                  <DoneIcon style={{width:"30px"}} 
                    onClick={() => {
                      setSnackOpen(true);
                      Cooked(recipe);
                    }}
                  />
                  </Tooltip>
              </IconButton>
              <h4 class="view-more" onClick={handleExpand}>
              {grown === 'grown' ? "Hide" : "View More"}
              </h4>
            </CardActions>
              <CardContent style={{paddingLeft: 0, paddingRight: 0}}>
                <ExpansionPanel
                
                  defaultExpanded={grown==='grown' ? true : false}
                  //expanded={grown==='grown' ? false : true}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="bold-me"
                  >
                      Ingredients 
                      </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                    <div style={{ overflow: 'auto', maxHeight: '250px', width: "100%" }}>
                      <Table stickyHeader >
                        <TableBody>
                        {recipe.ingredients.map(function(ing) {
                          return (
                            <TableRow key={ing.text}>
                              <TableCell>
                                {ing.text}
                              </TableCell>
                            </TableRow>
                          )
                        })}
                        </TableBody>
                      </Table>
                      </div>
                    </ExpansionPanelDetails>      
                  </ExpansionPanel >  

                  <ExpansionPanel
                    defaultExpanded={grown==='grown' ? true : false}
                    className="hide-for-shrunk"
                  >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="bold-me"
                  >
                      Method 
                      </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                    <div style={{ overflow: 'auto', maxHeight: '250px', width: "100%" }}>
                      <Table stickyHeader >
                        <TableBody>
                        {recipe.method.map(function(ing) {
                          return (
                            <TableRow key={ing}>
                              <TableCell>
                                {ing}
                              </TableCell>
                            </TableRow>
                          )
                        })}
                        </TableBody>
                      </Table>
                      </div>
                      
                    
                    </ExpansionPanelDetails>      
                  </ExpansionPanel>  

                  <ExpansionPanel
                  defaultExpanded={grown==='grown' ? true : false}
                  className="hide-for-shrunk"
                  >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="bold-me"
                        >
                          Dietary Information
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                        <div style={{ overflow: 'auto', maxHeight: '250px', width: "100%"}}>
                          <Table stickyHeader>
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  Item
                                </TableCell>
                                <TableCell>
                                  Total
                                </TableCell>
                                <TableCell>
                                  RDI
                                </TableCell>
                              </TableRow>
                            </TableHead>
                          <TableBody>
                          {recipe.digest.map(function(dig) {
                            return (
                              <TableRow>
                                <TableCell>
                                  {dig.label}
                                </TableCell>
                                <TableCell>
                                  {dig.total.toFixed(2) + dig.unit}
                                </TableCell>
                                <TableCell>
                                  {dig.hasRDI ? dig.daily.toFixed(2) : ''}
                                </TableCell>
                              </TableRow>
                            )
                          })}
                          </TableBody>
                          </Table>
                          </div>
                        </ExpansionPanelDetails>
                  </ExpansionPanel>        
              </CardContent>
        </Card>
      </Grid>
    );
}

export default ResultCard;