export default function Form(props){
    return <>
        
        <form onSubmit={props.handler} >
            <label htmlFor="person">Form Search:</label>
            <input type="text" name="person" placeholder="Search By Name" />
            <button type="submit" >Submit</button>
        </form>
    </>
}