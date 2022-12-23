import Receipt from "./Receipt"
import { useState } from "react";

export default function Receipts(props) {

    const handleEvent = (event) => {
        const newState = [...props.orderInformation]
        newState.sort((before, after) => before.person !== after.person ? before.person < after.person ? -1 : 1 : 0);
        props.setOrderInformation(newState)
    }

    return <>
        <br/>
        <button onClick={handleEvent}>Sort</button>
        <div className="receiptArea">
            {props.orderInformation.map((order) => <Receipt order={order} key={order.id}/>)}
        </div>
        
    </>
}