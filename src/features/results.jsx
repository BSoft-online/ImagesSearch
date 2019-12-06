import React from 'react';
import { createUseStyles } from 'react-jss';
// import { mobileBreakpoint } from 'config/constants';

const useStyles = createUseStyles({
    container: {
        width: '100%',
    },
    image: {},
});

export const Results = ({ results }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {results.map(({ title, url }, index) => (
                <div
                    className={classes.container}
                    key={index}
                    role="img"
                    aria-label={title}
                    src={url}
                />
            ))}
        </div>
    );
};
