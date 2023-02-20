import {RootStateExtracted} from "./index";
import {Middleware} from "redux";

export const exampleMiddleware: Middleware<{}, RootStateExtracted> =
    (store) => (next) => (action) => {
    // You logic here

    // In the end, pass the action to other middlewares
    // next in line. Or in the end - reducers
    return next(action);
}



export function logger({ getState }) {
    // Use function closures to your advantage
    let totalActionInterceptedCount = 0;
    return next => action => {
        console.log("logger");
        console.log('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        console.log("logger calls next(action)");
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        console.log("total actions dispatched since app restart: ", ++totalActionInterceptedCount)

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}

export const delayedActionMiddleware = store => next => action => {
    console.log("delayedActionMiddleware")
    if (action.type === 'addThanks') {
        setTimeout(() => {
            // Delay this action by one second
            next(action)
        }, 2000)
        return
    }
    console.log("delayedActionMiddleware calls next(Action)")
    return next(action)
}
//
// const fetchTodosMiddleware = storeAPI => next => action => {
//     if (action.type === 'todos/fetchTodos') {
//         // Make an API call to fetch todos from the server
//         fetch("").then(todos => {
//             const state = storeAPI.getState();
//
//             {
//                 number: 2,
//             }
//
//
//             // Dispatch an action with the todos we received
//             storeAPI.dispatch({ type: 'increment', payload: todos })
//             const state2 = storeAPI.getState();
//
//             {
//                 number: 3,
//             }
//
//             if (number > 3) {
//                 storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
//             } else {
//                 storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
//                 storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
//                 storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
//             }
//
//         })
//     }
//
//     return next(action)
// }
