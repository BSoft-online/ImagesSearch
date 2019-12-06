# Image Search

This is an example of the app fetching images from multiple data sources.

The application has two separate services:
- UI service (React JS)
- API service (Node JS, Express)

**API service** has specified one endpoint which allow to search for the images from two sources (Giphy and Pixabay - API keys are visible in the server only). The API mixes data from these sources and returns maximum 25 results.

**UI service** consists of two parts - an input for search term and a list of found images. The input allows to call the API endpoint and get results - it calls the API on every 300 ms typing break. This mechanism uses `xstream` and `recompose` functionality. The list renders the images in grid layout which is adjusted to cut the last row off if it couldn't fill whole row. The service has error handling, it displays information about no results and it handles the results loading with white overlay. The application uses React Hooks for convenience and `react-jss` as the CSS tool. Whole design is responsive and adjusted with following breakpoints: 0 px - 899 px, 900 px - up.

Requirements:
- Node JS
- npm

Installation:
- `npm install`

Application start (in development mode):
- `npm run dev` (first make sure you have free 3000 and 5000 ports)