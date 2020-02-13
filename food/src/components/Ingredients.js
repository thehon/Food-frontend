import React from 'react';

const Ingredients = (ingredient, subs) => {
{ grown ==='shrunk' ? (
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
</ExpansionPanel >)
:
(<ExpansionPanel
                
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
            {state.subs[ing.text] !== undefined ? (
            <ExpansionPanel>
            <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="bold-me"
                >Replacements</ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {state.subs[ing.text]}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            )
        
        : (
            <></>
        )}
        </TableCell>
        
        </TableRow>
    )
    })}
    </TableBody>
</Table>
</div>
</ExpansionPanelDetails>      
</ExpansionPanel >)   }
}
export default Ingredients