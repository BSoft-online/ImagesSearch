import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    error: {
        color: 'red',
    },
});

export const Error = ({ message }) => {
    const classes = useStyles();
    return <div className={classes.error}>{message}</div>;
};
