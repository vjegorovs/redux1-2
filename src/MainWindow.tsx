import * as React from "react";

import {DonationCards} from "./DonationCards";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./rootReducer";
import {random, randomName} from "./utils";


export function MainWindow() {
    const totalDonationAmount = useSelector((state: RootState) => state.totalDonationAmount);
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

    return (
        <div className="main">
            <h3>Total pledged: </h3> { totalDonationAmount}
            <br />
            <button onClick={buttonCallback}>{"DONATE NOW! <3"}</button>
            <DonationCards />
        </div>
    );
}


