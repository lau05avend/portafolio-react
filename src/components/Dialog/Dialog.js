import './Dialog.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialogo from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Icon from '@mui/material/Icon';

function Dialog(prop){

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm')

    return(
        <div>
        <Dialogo open={prop.open} onClose={prop.handleClose} fullWidth={fullWidth} maxWidth={maxWidth} >
                <DialogTitle>{prop.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {prop.children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={prop.handleClose}>Cerrar</Button>
                </DialogActions>
        </Dialogo>
    </div>
    );
}

export default Dialog;
