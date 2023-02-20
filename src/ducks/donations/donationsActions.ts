export type DonationsActionType = {
    type: "donate",
    payload: { name: string, amount: number }
} | {
    type: "addThanks",
    payload: { recipient: string }
};



