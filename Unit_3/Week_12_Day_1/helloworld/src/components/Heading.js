function Heading(props){

    const jsx = <h2>Goodbye World</h2>
  
    console.log(jsx)
  
    return <>
        <h1>Bread: {props.bread}</h1>
        <h3>Cheese: {props.cheese.toUpperCase()}</h3>
        
    </>
  }

export default Heading