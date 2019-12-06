import xs from 'xstream';
import debounce from 'xstream/extra/debounce';

const searchFunction = async (value, setIsLoading) => {
    try {
        setIsLoading(true);
        const response = await fetch(`${process.env.API_URL}?q=${value}`);
        const { results, error } = await response.json();
        setIsLoading(false);
        return error || results;
    } catch (e) {
        return 'Server error occured.';
    }
};

export const resultsFromQuery = (stream$, setIsLoading) =>
    stream$
        .compose(debounce(300))
        .map(({ value }) =>
            xs.fromPromise(
                value.length > 2
                    ? searchFunction(value, setIsLoading)
                    : Promise.resolve([])
            )
        )
        .flatten();
