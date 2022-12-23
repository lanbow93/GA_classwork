export default function BookPresentation(props){
    return <>

        <img src="https://cdn1.iconfinder.com/data/icons/customer-service-30/48/15-128.png" alt="Thumbnail of book icon" />
        <h4>{props.title}</h4>
        <h4>By: {props.authors}</h4>
        <h4>Description:</h4> 
        <p>{props.description}</p>
    </>
}