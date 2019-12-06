import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Setup recompose to use xstream observable config
import { setObservableConfig } from 'recompose';
import xstreamConfig from 'recompose/xstreamObservableConfig';
setObservableConfig(xstreamConfig);

ReactDOM.render(<App />, document.getElementById('root'));
