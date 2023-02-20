import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {donationsReducer} from "./donations/donationsReducer";
import {numbersReducer} from "./numbers/numbersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {DonationsActionType} from "./donations/donationsActions";
import {NumberActionType} from "./numbers/numberActions";
import {delayedActionMiddleware, logger} from "./middleware";

const middlewares = [
    delayedActionMiddleware,
    logger,
    thunk.withExtraArgument({
        test: 5763,
    })
]

const rootReducer = combineReducers({
    donations: donationsReducer,
    number: numbersReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export type RootStore = typeof store;
export type RootStateExtracted = ReturnType<typeof store.getState>;
export type RootActions = DonationsActionType | NumberActionType;
