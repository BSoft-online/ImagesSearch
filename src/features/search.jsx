import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    search: {
        width: '100%',
    },
});

export const Search = () => {
    const classes = useStyles();
    return <input type="search" className={classes.search} />;
};
