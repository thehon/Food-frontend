import React, { useState, useContext } from 'react';
import { CardContent, CardActions, IconButton, ListItem, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Tooltip, TableCell, TableBody, Table, Chip, List, CardMedia, CardHeader, Card, TableHead, TableRow, Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import WarningIcon from '@material-ui/icons/Warning';
import ClearIcon from '@material-ui/icons/Clear';
import ShareIcon from '@material-ui/icons/Share';
import { red, yellow, green } from '@material-ui/core/colors';
import { ReactComponent as ServeIcon } from '../images/serve.svg';
import SearchIcon from '@material-ui/icons/Search';
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
      height: "150px"
    },
    healthChip: {
      backgroundColor: "forestGreen",
      color: 'white'
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
    const { Cooked } = useContext(Context);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const classes = useStyles();
    const recipe = result.recipe;
    
    return (
      <Grid item xs={12} md={3} className={grown}>
        <Card className={classes.root}>
          <div className="small-grid">
            <CardHeader
                title={recipe.label}
                subheader={recipe.totalTime !== 0 ? 'Time: ' + recipe.totalTime : 'Time: 32'}
                className={classes.cardHeader}
                action={
              <List>
              {recipe.match.map(function(caut) {
                
                  if (caut !== '') {
                  return (
                    <ListItem className={classes.healthItem}>
                      <Chip
                        
                        label={caut}
                        key={caut}
                        className={classes.matchItem}
                      />
                    </ListItem>
                  )
                  }})}
                </List>
                }
                />
              
            <CardMedia
              className={classes.media}
              image={recipe.image}
              title={recipe.label}
            />
          
            <CardContent>
              <List className={classes.healthList}>
                {recipe.dietLabels.map(function(diet)  {
                  return (
                    <ListItem className={classes.healthItem}>
                      <Chip 
                        deleteIcon={<DoneIcon style={{color: yellow[50]}} />}
                        label={diet}
                        key={diet}
                        onDelete
                        className={classes.healthChip}
                      
                      />
                    </ListItem>
                  )
                })}
                
              </List>
              { result.description }
            </CardContent>
            </div>
            <CardActions >
            
            <IconButton >
                <Tooltip title="Remove">
                  <ClearIcon  />
                  </Tooltip>
              </IconButton>
              <IconButton >
                <Tooltip title="Share">
                  <ShareIcon/>
                  </Tooltip>
              </IconButton>
              <IconButton >
                <Tooltip title="Mark as cooked">
                  <ServeIcon style={{width:"30px"}} 
                    onClick={() => {
                      setSnackOpen(true);
                      Cooked(recipe);
                    }}
                  />
                  </Tooltip>
              </IconButton>
              <IconButton >
                <Tooltip title="Expand">
                  
                  <SearchIcon style={{width:"30px"}} 
                    onClick={() => {
                      if (grown === 'grown') {
                        setGrown('shrunk');
                      } else {
                        setGrown('grown');
                      }
                    }}
                  />
                  </Tooltip>
              </IconButton>
              
            </CardActions>
              <CardContent style={{paddingLeft: 0, paddingRight: 0}}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
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
                  </ExpansionPanel>  

                  <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
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

                  <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
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