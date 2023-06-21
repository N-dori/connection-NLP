import { applyMiddleware, combineReducers,compose, legacy_createStore as createStore } from "redux"

import thunk from "redux-thunk"
import { userReducers } from "./reducers/user.reducer"
import { courseReducers } from "./reducers/course.reducer"
import { cartReducers } from "./reducers/cartReducer"
import { announcementReducers } from "./reducers/announcement.reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    couresModule:  courseReducers,
    userModule: userReducers,
 cartModule: cartReducers,
announcementModule: announcementReducers,
})
export const store = createStore(rootReducer ,composeEnhancers(applyMiddleware(thunk)))

window.gStore = store 