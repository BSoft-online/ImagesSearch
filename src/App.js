import React, { useState } from 'react';
import { Search } from 'features/search';
import { PageContainer } from 'features/pageContainer';
import { Results } from 'features/results';
import { NoResults } from 'features/noResults';
import { Error } from 'features/error';
import { Loader } from 'features/loader';
import 'regenerator-runtime/runtime';
import 'cross-fetch/polyfill';

const App = () => {
    const [images, setImages] = useState([]);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    return (
        <PageContainer>
            <Search
                setIsLoading={value => {
                    !value && setIsFirstRender(false);
                    setIsLoading(value);
                }}
                setResults={setImages}
                setError={setError}
            />
            {isLoading ? <Loader /> : null}
            {error ? (
                <Error message={error} />
            ) : Array.isArray(images) && images.length ? (
                <Results results={images} />
            ) : (
                <NoResults isFirstRender={isFirstRender} />
            )}
        </PageContainer>
    );
};

export default App;
