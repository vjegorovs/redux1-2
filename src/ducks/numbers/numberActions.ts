export type NumberActionType = ReturnType<
    typeof incrementUselessNumber
 | typeof decrementUselessNumber
//  | typeof someOtherActionCreatorFunction
    >;

// export const INCREMENT_USELESS_NUMBER = "numbers/INCREMENT_USELESS_NUMBER";

export enum NumberActions {
    INCREMENT_USELESS_NUMBER = "numbers/INCREMENT_USELESS_NUMBER",
    DECREMENT_USELESS_NUMBER = "numbers/DECREMENT_USELESS_NUMBER",
}


export function incrementUselessNumber() {
    return {
        type: NumberActions.INCREMENT_USELESS_NUMBER,
    } as const;
}

export function decrementUselessNumber() {
    return {
        type: NumberActions.DECREMENT_USELESS_NUMBER,
    } as const;
}




