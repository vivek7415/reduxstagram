import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import PostReducer from './Store/Reducers/posts';
import CommentReducer from './Store/Reducers/comments';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

 

const rootReducer = combineReducers({
    posts: PostReducer,
    comments: CommentReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = (
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
