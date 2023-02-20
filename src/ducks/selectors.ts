import {createSelector} from "reselect";
import {RootStateExtracted} from "./index";

export const selectDonations = (state: RootStateExtracted) => state.donations.donations;

export const memoizedNameSelector = createSelector(
    selectDonations, // Returns donators[]
    (donations) => {
        return donations.map(donation => donation.name)
    }
)
