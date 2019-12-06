import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    loader: {
        position: 'fixed',
        top: '95px',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        opacity: 0.5,
    },
});

export const Loader = ({ message }) => {
    const classes = useStyles();
    return <div className={classes.loader}>{message}</div>;
};
