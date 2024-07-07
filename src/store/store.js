import { combineReducers, legacy_createStore as createStore } from "redux";
import Story from "./reducers/story";

const reducers = combineReducers({
    stories : Story
})
const store = createStore(reducers)

window.getState = store.getState
export default store;