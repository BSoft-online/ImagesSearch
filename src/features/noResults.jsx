import React from 'react';

const firstRenderText =
    'This is an example of the app fetching images from multiple data sources. Type more than 2 characters to search.';
const noResultsText = 'There is no images for this term. Try to type another.';

export const NoResults = ({ isFirstRender }) => (
    <div>{isFirstRender ? firstRenderText : noResultsText}</div>
);
