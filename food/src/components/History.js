import React from 'react';
import { List, ListItemAvatar, ListItem, Avatar, ListItemText, Divider } from '@material-ui/core';

const History = ({history}) => {
    console.log('hjistpry: ', history);
    if (history !== undefined) {
    return (
        <>

        <List>
            {history.map(function(item){
                return (
                    <>
                    <div class="history-header">
                        <h1>Previously Cooked Recipes</h1>
                    </div>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={item.imageurl}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={item.weight + ' grams of food saved'}
                        />                            
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </>
                );
            })}
        </List>
        </>
    )
    } else {
        return <></>;
    }
}

export default History;