import React from 'react';
import { createUseStyles } from 'react-jss';
import {
    Image,
    mobileElementsPerFilling,
    desktopElementsPerFilling,
} from './image';
import { mobileBreakpoint } from 'config/constants';

const mobileRowsToFill = 2;
const desktopRowsToFill = 3;

const useStyles = createUseStyles({
    container: {
        width: '100%',
        display: 'grid',
        gridColumnGap: '5px',
        gridRowGap: '5px',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: props =>
            `repeat(${Math.floor(
                (props.count * mobileRowsToFill) / mobileElementsPerFilling
            )}, 200px)`,
        [`@media (min-width: ${mobileBreakpoint}px)`]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: props =>
                `repeat(${Math.floor(
                    (props.count * desktopRowsToFill) /
                        desktopElementsPerFilling
                )}, 300px)`,
        },
    },
});

export const Results = ({ results }) => {
    const classes = useStyles({ count: results.length });
    return (
        <div className={classes.container}>
            {results.map((props, index) => (
                <Image key={index} {...props} />
            ))}
        </div>
    );
};
