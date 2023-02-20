import {random, randomName} from "../../utils";
import {DonationsActionType} from "./donationsActions";

const intialAmount = random(1, 1000);
const name = randomName();

const initialState: DonationsState = {
    totalDonationAmount: intialAmount,
    topDonator: {name: name, amount: intialAmount, kudos: 0},
    donations: [{ name: name, amount: intialAmount, kudos: 0 }],
}

export interface DonationsState {
    totalDonationAmount: number;
    topDonator: {name: string; amount: number; kudos: number;};
    donations: {name: string; amount: number; kudos: number;}[];
}

export function donationsReducer(
    state = initialState,
    action: DonationsActionType
): DonationsState {
 switch (action.type) {
    case "donate":

        const donator = {
            ...action.payload,
            kudos: 0,
        }

        let newTopDonor = state.topDonator;
        if (donator.amount > state.topDonator.amount) {
           newTopDonor = donator;
        }
        return {
            ...state,
            donations: state.donations.concat(donator),
            totalDonationAmount: state.totalDonationAmount + donator.amount,
            topDonator: newTopDonor,
        };
    case "addThanks":
         const name = action.payload.recipient;
         const foundDonator = state.donations.findIndex(donator => donator.name === name);
         const newDonationsArray = [...state.donations];
         if (foundDonator !== -1) {
             newDonationsArray[foundDonator].kudos += 1;
         }

         const isTopDonator = state.topDonator.name === action.payload.recipient;
         const newTopDonator = { ...state.topDonator };
         if (isTopDonator) {
             newTopDonator.kudos += 1;
         }
         return {
             ...state,
             donations: newDonationsArray,
             topDonator: newTopDonator,
         };
 }
    return state;
}


