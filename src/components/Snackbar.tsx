import React, { useState, useEffect } from 'react';
import { Snackbar as MuiSnackbar, SnackbarCloseReason } from '@material-ui/core';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import message from 'utils/message';

function Alert(props: AlertProps) {
    return <MuiAlert variant="filled" {...props} />;
}

const Snackbar: React.FC<{}> = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [severity, setSeverity] = useState<Color>("info");
    const [content, setContent] = useState("");

    useEffect(() => {
        message.info = (msg) => {
            setOpen(true);
            setSeverity("info");
            setContent(msg);
        };
        message.warn = (msg) => {
            setOpen(true);
            setSeverity("warning");
            setContent(msg);
        };
        message.success = (msg) => {
            setOpen(true);
            setSeverity("success");
            setContent(msg);
        };
        message.error = (msg) => {
            setOpen(true);
            setSeverity("error");
            setContent(msg);
        };
    }, [])

    const handleClose = (_: React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <MuiSnackbar anchorOrigin={{ vertical: 'top', horizontal: 'right'}} open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert elevation={8} severity={severity}>
                    {content}
                </Alert>
            </MuiSnackbar>
        </>
    )
}

export default Snackbar;