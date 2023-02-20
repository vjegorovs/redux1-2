import * as React from "react";
import {Card, MemoizedCard} from "./Card.js";
import {connect, shallowEqual, useSelector} from "react-redux";
import {createSelector} from "reselect";
import {memo} from "react";
import {isEqual, isEqualWith} from "lodash-es";
import {RootStateExtracted} from "../ducks";

export function DonationCards({ children }: React.PropsWithChildren) {
    const donators = useSelector((state: RootStateExtracted) => state.donations.donations)
    return (
            <>
                {children}
            <h3>All donations:</h3>
            <ul>
                {donators.map((donator) => (
                    <li key={donator.name}>
                        <Card name={donator.name} amount={donator.amount} kudos={donator.kudos}/>
                    </li>
                ))}
            </ul>
            </>
    );
}

export const MemoDonationCards = memo(DonationCards)

// const selectSomeData = (state) => state.someData;

// const selectFilteredSortedTransformedData = createSelector(
//     selectSomeData,
//     (someData) => {
//         const filteredData = expensiveFiltering(someData);
//         const sortedData = expensiveSorting(filteredData);
//         const transformedData = expensiveTransformation(sortedData);
//
//         return transformedData;
//     }
// );

const memoSelectDecoratedTopDonator = createSelector(
    (state: RootStateExtracted) => state.donations.topDonator,
    (topDonator) => {
        // Imagine this actual selector code is very CPU heavy
        console.log("Actually running the expensive selector")
        return `🏆 ${JSON.stringify(topDonator)} 🏆`;
    },
)

export function TopDonorComponent() {
    // Expensive calculation is memoized
    const topDonor = useSelector(memoSelectDecoratedTopDonator)

    // Expensive selector executes on every run
    // const topDonor = useSelector((state: RootStateExtracted) => {
    //     console.log("Actually running the expensive selector")
    //     return `🏆 ${JSON.stringify(state.donations.topDonator)} 🏆`;
    // })

    return (
        <>
        <h1>TOP DONOR:</h1>
    {topDonor}
        </>
    )
}

const MemoTopDonorComponent = memo(TopDonorComponent)
