import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// function saveToLocalStorage(state) {
//     try {
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState)
//     } catch(e) {
//         console.log(e)
//     }
// }

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;