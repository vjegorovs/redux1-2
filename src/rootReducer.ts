import {random, randomName} from "./utils";

const intialAmount = random(1, 1000);

const initialState = {
    totalDonationAmount: intialAmount,
    donations: [{ name: randomName(), amount: intialAmount, kudos: 0 }]
}

export interface RootState {
    totalDonationAmount: number;
    donations: {name: string; amount: number; kudos: number;}[]
}

export type ActionType = {
    type: "donate",
    payload: { name: string, amount: number }
} | {
    type: "addThanks",
    payload: { recipient: string }
};

export function rootReducer(
    state = initialState,
    action: ActionType
): RootState {
 switch (action.type) {
        case "donate":

            const donator = {
                ...action.payload,
                kudos: 0,
            }

            return {
                ...state,
                donations: state.donations.concat(donator),
                totalDonationAmount: state.totalDonationAmount + donator.amount
            };
     case "addThanks":
         const name = action.payload.recipient;
         const foundDonator = state.donations.find(donator => donator.name === name);
         if (foundDonator) {
             foundDonator.kudos += 1;
         }
         const newDonations = [foundDonator];

         return {
             ...state,
             donations: newDonations!,
         };

 }
    return state;
}


