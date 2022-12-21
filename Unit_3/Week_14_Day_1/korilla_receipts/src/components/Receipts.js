import Receipt from "./Receipt"

export default function Receipts(props) {
    return <>
        <div className="receiptArea">
            {props.orderInformation.map((order) => <Receipt order={order} key={order.id}/>)}
        </div>
        
    </>
}