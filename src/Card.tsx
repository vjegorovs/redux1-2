import * as React from "react";
import {useDispatch} from "react-redux";

export function Card({ amount, name, kudos }: Props) {
    const dispatch = useDispatch();

    const callback = React.useCallback(() => {
        dispatch({
            type: "addThanks",
            payload: {
                recipient: name,
            }
        })
    }, [name])
    return (
        <div className="ticket">
            <h4>{name}</h4>
                <p>{`Pledged amount: ${amount}`}</p>
                <p>{`Thanks received: ${kudos}`}</p>
                <button onClick={callback}>{`Thank ${name}`}</button>
        </div>
    );
}

interface Props {
    amount: number;
    name: string;
    kudos: number;
}
