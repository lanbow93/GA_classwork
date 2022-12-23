export default function BookPresentation(props){
    return <>

        <img src={props.url}alt="Thumbnail of book icon" />
        <h4>{props.title}</h4>
        <h4>By: {props.authors}</h4>
        <h4>Description:</h4> 
        <p>{props.description}</p>
    </>
}