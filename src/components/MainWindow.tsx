import * as React from "react";

import {
    DonationCards,
    MemoDonationCards,
    TopDonorComponent
} from "./DonationCards";
import {useDispatch, useSelector} from "react-redux";
import {random, randomName} from "../utils";
import {RootStateExtracted} from "../ducks";
import {timedOutMultiDonation} from "../ducks/thunks";
import {incrementUselessNumber} from "../ducks/numbers/numberActions";


export function MainWindow() {
    const totalDonationAmount = useSelector((state: RootStateExtracted) => state.donations.totalDonationAmount);
    const dispatch = useDispatch();

    const buttonCallback = React.useCallback(() => {
        dispatch({
            type: "donate",
            payload: {
                name: randomName(),
                amount: random(1, 1000),
            }
        })
    }, [])

    const buttonCallbackThunk = React.useCallback(() => {
        dispatch(timedOutMultiDonation(4, 2500));
    }, [])

    const uselessIncrementCallback = React.useCallback(() => {
        dispatch(incrementUselessNumber());
    }, [])

    return (
        <div className="main">
            <h3>Total pledged: </h3> { totalDonationAmount}
            <br />
            <button onClick={buttonCallback}>{"DONATE NOW! <3"}</button>
            <button onClick={buttonCallbackThunk}>{"Multidonate! <3"}</button>
            <button onClick={uselessIncrementCallback}>{"Useless increment"}</button>
            <MemoDonationCards>
                <TopDonorComponent />
            </MemoDonationCards>
        </div>
    );
}


