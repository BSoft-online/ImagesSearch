import React, { useEffect, useRef } from 'react';
import { createEventHandler } from 'recompose';
import { createUseStyles } from 'react-jss';
import { resultsFromQuery } from './functions';

const useStyles = createUseStyles({
    search: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '30px',
    },
});

export const Search = ({ setIsLoading, setResults, setError }) => {
    const classes = useStyles();
    const fetch = useRef();

    useEffect(() => {
        const { handler, stream: stream$ } = createEventHandler();
        const resultsStream$ = resultsFromQuery(stream$, setIsLoading);
        const subscriber = resultsStream$.subscribe({
            next: result => {
                if (Array.isArray(result)) {
                    setResults(result);
                    setError(null);
                } else setError(result);
            },
        });
        fetch.current = handler;
        return () => {
            subscriber.unsubscribe();
            fetch.current = null;
        };
    }, []);

    const handleChange = event =>
        fetch.current && fetch.current({ value: event.target.value });

    return (
        <input
            type="text"
            onChange={handleChange}
            placeholder="Type something to search"
            className={classes.search}
        />
    );
};
