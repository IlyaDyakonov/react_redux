import { combineReducers, compose, legacy_createStore } from "redux";
import FormReducer from './redusers/FormReducer';
import TableReducer from './redusers/TableReducer';
import SearchReducer from './redusers/SearchReducer';


const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


function configureStore() {
    return legacy_createStore(
        combineReducers({
            table: TableReducer,
            form: FormReducer,
            search: SearchReducer,
        }),
        compose(
            ReactReduxDevTools,
        )
    );
}

export default configureStore;