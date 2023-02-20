import * as React from "react";
import {useSelector} from "react-redux";
import {RootStateExtracted} from "../ducks";
import {memoizedNameSelector} from "../ducks/selectors";


export function SideBar() {
    // const names = useSelector(
    //     (state: RootStateExtracted) => state.donations.donations.map(donator => donator.name)
    // )
    const names = useSelector(memoizedNameSelector)
    console.log("sidebar render", names);
    return (
        <div className="sidebar">
            <h6>Latest donators:</h6>
            <ul className="sideul">
                {names.map((name, idx) => <li key={`${name}${idx}`}>{name}</li>)}
            </ul>
        </div>
    );
}
