export default function Receipt(props){
    return <>
        <div className="receiptCard" >
            <h2>{props.order.person}</h2>
            <h4>{props.order.order.main}</h4>
            ------------------
            <h5>{props.order.order.protein}</h5>
            <h5>{props.order.order.rice}</h5>
            <h5>{props.order.order.sauce}</h5>
            <h5>{props.order.order.drink}</h5>
            <h5>{props.order.order.cost}</h5>
            <h5>{props.order.paid ? "True" : "False"}</h5>
        </div>
    </>
}