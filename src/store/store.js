import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import UserReducer from './UserReducer';
import FormReducer from './FormReducer';

const rootReducer = combineReducers({
    UserReducer,
    form: FormReducer
});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;