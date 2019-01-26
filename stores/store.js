import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movies from './reducers/movieReducers';
import relatedMovies from './reducers/relatedMovieReducers';

const rootReducers = combineReducers({
    movies,
    relatedMovies
})

const logger = store => next => action => {
    console.log('this is action ------------', action)
    console.log('this is current dipatch ---', store.getState())
    next(action)
}

const store = createStore(rootReducers, compose(applyMiddleware(thunk, logger)))

export default store
