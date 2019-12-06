import React from 'react';
import { createUseStyles } from 'react-jss';
import { mobileBreakpoint } from 'config/constants';

export const mobileElementsPerFilling = 3;
export const desktopElementsPerFilling = 8;

const useStyles = createUseStyles({
    image: {
        width: '100%',
        height: '100%',
        backgroundImage: props => `url("${props.url}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        [`@media (max-width: ${mobileBreakpoint - 1}px)`]: {
            [`&:nth-child(${mobileElementsPerFilling}n + 1)`]: {
                gridColumn: 'auto /span 2',
            },
        },
        [`@media (min-width: ${mobileBreakpoint}px)`]: {
            [`&:nth-child(${desktopElementsPerFilling}n + 1)`]: {
                gridColumn: 'auto /span 2',
            },
            [`&:nth-child(${desktopElementsPerFilling}n + 2)`]: {
                gridColumn: 'auto /span 2',
                gridRow: 'auto /span 2',
            },
        },
    },
});

export const Image = ({ title, url }) => {
    const classes = useStyles({ url });
    return <div className={classes.image} role="img" aria-label={title} />;
};
