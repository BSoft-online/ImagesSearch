const express = require('express');
const queryString = require('query-string');
const fetch = require('cross-fetch');
const app = express();

const giphyApiKey = 'DE3VqZSsDBWUNnRGjtG0sescZbNps9C3';
const getGiphyUrl = q =>
    `https://api.giphy.com/v1/gifs/search?${queryString.stringify({
        api_key: giphyApiKey,
        lang: 'en',
        q,
    })}`;
const getGiphyResults = async term => {
    const response = await fetch(getGiphyUrl(term));
    const { data } = await response.json();
    const results = (Array.isArray(data) ? data : []).map(({ url, title }) => ({
        url,
        title,
    }));
    return results;
};

const pixabayApiKey = '14526740-347d21f173eb7ef31c038d8b7';
const getPixabayUrl = q =>
    `https://pixabay.com/api/?${queryString.stringify({
        key: pixabayApiKey,
        lang: 'en',
        q,
    })}`;
const getPixabayResults = async term => {
    const response = await fetch(getPixabayUrl(term));
    const { hits } = await response.json();
    const results = (Array.isArray(hits) ? hits : []).map(
        ({ webformatURL, tags }) => ({
            url: webformatURL,
            title: tags,
        })
    );
    return results;
};

const mixArrays = (arr1, arr2) => {
    const [largerArray, smallerArray] = [arr1, arr2].sort((a, b) =>
        a.length > b.length ? -1 : 1
    );
    let results = [];
    for (let i = 0; i < largerArray.length; i++) {
        results.push(largerArray[i]);
        smallerArray[i] && results.push(smallerArray[i]);
    }
    return results;
};

app.get('/', async (req, res) => {
    const { q } = req.query;
    if (!q || q.length < 3) res.json({ results: [] });
    else
        await Promise.all([getGiphyResults(q), getPixabayResults(q)])
            .then(([giphyResults, pixabayResults]) =>
                res
                    .status(200)
                    .json({ results: mixArrays(giphyResults, pixabayResults) })
            )
            .catch(() =>
                res.status(500).json({ error: 'Server error occured' })
            );
});

app.listen(5000);
