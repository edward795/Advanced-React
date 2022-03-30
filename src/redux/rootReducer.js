import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecream/icecreamReducer";
import userReducer  from "./users/usersReducer"

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    users:userReducer
})

export default rootReducer