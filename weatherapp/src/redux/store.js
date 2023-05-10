import { legacy_createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import weatherReducer from './reducers/WeatherReducer';
// import rootReducer from "./rootReducer";

const middleware = applyMiddleware(thunk);


const store = legacy_createStore(weatherReducer,middleware)



export default store;