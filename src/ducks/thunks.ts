// Thunk function
// export async function fetchTodos(dispatch, getState) {
//     const response = await client.get('/fakeApi/todos')
//     dispatch({ type: 'todos/todosLoaded', payload: response.todos })
// }
//
import {ThunkAction} from "redux-thunk";
import {RootActions, RootStateExtracted} from "./index";
import {random, randomName} from "../utils";

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateExtracted, { test: number }, RootActions>


type Thunk = ThunkAction<any, any, any, any>;

const thunkFunction: Thunk =
    (dispatch, getState) => {
    // logic here that can dispatch actions or read state
}


// Write a synchronous outer function that receives the required parameters:
export function timedOutMultiDonation(amount: number, timeout: number): AppThunk {
    // And then creates and returns the async thunk function:
    return async function multiDonation(dispatch, getState, {test}) {
        const state = getState();

        // console.log("reading state in thunk", state.donations.totalDonationAmount)
        // console.log("test thunk extra arg: ", test);
        //
        //
        // dispatch({
        //     type: "donate",
        //     payload: {
        //         name: randomName(),
        //         amount: random(1, 1000),
        //     }
        // })
        //
        // console.log("comparsion between stale state and new actual state:")
        // console.log("state.totalDonationAmount", state.donations.totalDonationAmount);
        // console.log("getState().totalDonationAmount", getState().donations.totalDonationAmount);


        setTimeout(() => {
            for (let i = 0; i < amount; i++) {
                dispatch({
                    type: "donate",
                    payload: {
                        name: randomName(),
                        amount: random(1, 1000),
                    }
                })
            }
        }, timeout)
    }
}
