import React, { useState, useEffect } from 'react';


import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function AddPost(openFlag) {
    const [open, setOpen] = React.useState(true);
    const [message, setMessage] = useState({
        'message': ''

    })

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
        setMessage({ ...message, ['message']: '' })

    };

    return (
        <div>
            {open ?
            <Dialog open onClose={handleClose} aria-labelledby="form-dialog-title" style={{ width: '100%' }}>
                <DialogTitle id="form-dialog-title">REPLY TO</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       dfdjlfjkdsf
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClose={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            : 
                <Dialog close onClose={handleClose} aria-labelledby="form-dialog-title" style={{ width: '100%' }}>
                    <DialogTitle id="form-dialog-title">REPLY TO</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            dfdjlfjkdsf
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClose={handleClose}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </div>
    );
}
