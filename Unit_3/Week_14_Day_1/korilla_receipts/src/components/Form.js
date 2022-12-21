export default function Form(props){


    return <>
        
        <form onSubmit={props.eventHandler} >
            <label htmlFor="person">Form Search:</label>
            <input type="text" name="person" value={props.form} onChange={props.changeHandler} placeholder="Search By Name" />
            <button type="submit" >Submit</button>
        </form>
    </>
}