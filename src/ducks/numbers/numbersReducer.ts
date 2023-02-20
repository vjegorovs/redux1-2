import {NumberActions, NumberActionType} from "./numberActions";

const initialState: NumbersState = {
    totallySeparateUselessNumber: 0,
}

export interface NumbersState {
    totallySeparateUselessNumber: number;
}

export function numbersReducer(
    state = initialState,
    action: NumberActionType
): NumbersState {
    switch (action.type) {
        case NumberActions.INCREMENT_USELESS_NUMBER:
            return {
                ...state,
                totallySeparateUselessNumber: state.totallySeparateUselessNumber + 1,
            }
        // case NumberActions.DECREMENT_USELESS_NUMBER:
        //

    }
    return state;
}
