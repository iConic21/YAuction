import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
import Async from './middlewares/async';
import apiResult from './middlewares/apiResult';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, Async, apiResult));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
    
registerServiceWorker();
