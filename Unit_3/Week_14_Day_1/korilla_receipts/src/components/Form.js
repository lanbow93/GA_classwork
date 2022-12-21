export default function Form(props){


    return <>

        <form onSubmit={props.eventHandler} >
            <input type="text" name="person" value={props.form} onChange={props.changeHandler} placeholder="Search By Name" />
            <button type="submit" >Submit</button>
        </form>
    </>
}