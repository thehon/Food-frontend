import React, { useState, useEffect, useContext } from 'react';
import Container from '@material-ui/core/Container';
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../context/FoodContext';
import Grid from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'contents',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },    
    pref: {
        backgroundColor: 'lightgray',
        borderRadius: '5'
    },
    prefContainer: {
        marginTop: "5px"
    },
    selected: {
        backgroundColor: 'lightgreen',
        color: 'white'
    },
  }));

  const dietPrefsList = ['vegan', 'lactose free', 'vegetarian', 'nut free', 'dairy free', 'fish free', 'egg free'];

const SearchBox = ({searchItems, setSearchItems}) => {
    const [ dietPrefs ,setDietPrefs ] = useState([]);
    const classes = useStyles();
    const [currentItem, setCurrentItem ] = useState('');
    const { state, IngredientsPopulate, Search } = useContext(Context);
    useEffect(() => {
        IngredientsPopulate();
    },[]);
    
    return ( 
        <Container maxWidth="lg" style={{paddingLeft: 0, paddingRight: 0}}>
            <Autocomplete label="Enter your ingredients" fullWidth 
                autoSelect={true}
                options={state.autoCompleteIngredients.data}
                getOptionLabel={option => option}
                value={currentItem}
                
                onChange={event => {
                    if (event.currentTarget.textContent != '') {
                        setCurrentItem(event.currentTarget.textContent)
                        setSearchItems([...searchItems, currentItem]);
                    }
                }}
                renderInput={params => (
                    <TextField 
                        {...params} value={currentItem} label="Tell us whats in ya cupboard..." variant="outlined" fullWidth 
                    /> 
                    )
                }
                onKeyPress={(key) => {
                    if (key.key =="Enter" && currentItem != '') {
                        setCurrentItem(currentItem);
                        setSearchItems([...searchItems, currentItem]);
                        Search(searchItems, dietPrefs);
                    }
                }}
            />
            <List className={classes.prefContainer}>
                {dietPrefsList.map(function(item) {
                    if (dietPrefs.length !== 0 ) {
                        if (dietPrefs.includes(item)) {
                    return (
                        <ListItem className={classes.root}>    
                            <Chip 
                                label={item}
                                className={classes.selected}
                                onClick={(me) => setDietPrefs(dietPrefs.filter(function(item) {
                                    return item !== me.target.textContent;
                                }))}
                            />
                        </ListItem>
                    );
                } else { 
                    return (
                        <ListItem className={classes.root}>    
                            <Chip 
                                label={item}
                                className={classes.unselected}
                                onClick={(me) => {setDietPrefs([...dietPrefs, me.target.textContent])}}
                            />
                        </ListItem>
                    )
                }
            
            } else { 
                    return (
                        <ListItem className={classes.root}>    
                            <Chip 
                                label={item}
                                className={classes.unselected}
                                onClick={(me) => {setDietPrefs([...dietPrefs, me.target.textContent])}}
                            />
                        </ListItem>
                    )
                }
                })}
            </List>
            <List>
                {searchItems.map( el => {
                    return (
                        <ListItem className={classes.root}>
                            <Chip 
                                label={el} 
                                key={el}
                                onDelete={(ele) => {  setSearchItems(searchItems.filter(function(item) {
                                    return item !== el;
                                }))}}
                            />
                        </ListItem>
                    )
                })}
            </List>
        </Container>
    )   
}

export default SearchBox;