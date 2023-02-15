import * as React from "react";
import { Card } from "./Card.js";
import {random, randomName} from "./utils.js";
import {useSelector} from "react-redux";
import {RootState} from "./rootReducer";

export function DonationCards() {
    const donators = useSelector((state: RootState) => state.donations)
    return (
            <>
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
