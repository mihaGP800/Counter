import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {counterReducer} from './Counter-reducer';
import {loadState, saveState} from '../../utils/localstorage-utils';

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})