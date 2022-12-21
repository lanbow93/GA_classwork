export default function Receipt(props){
    return <>
        <form className="receiptCard" >
            <h2>{props.order.person}</h2>
            <h3>{props.order.order.main}</h3>
            <ul>
                <li>Protein: {props.order.order.protein}</li>
                <li>Rice: {props.order.order.rice}</li>
                <li>Sauce: {props.order.order.sauce}</li>
                <li>Drink: {props.order.order.drink}</li>
                <li>Cost: {props.order.order.cost}</li>
                <li>Paid: {props.order.paid ? "True" : "False"}</li>
            </ul>


        </form>
    </>
}