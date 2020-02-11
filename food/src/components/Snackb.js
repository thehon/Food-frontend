import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Snackb = ({snackOpen, handleClose}) => {

    return (
        <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Marked As Cooked"
            action={
            <>
                <Button color="secondary" size="small" onClick={handleClose}>
                View environmental dashboard
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
                </IconButton>
            </>
            }
        />
    )
}

export default Snackb