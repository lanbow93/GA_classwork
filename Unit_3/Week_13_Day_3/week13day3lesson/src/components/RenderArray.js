import Card from "./Card";

function RenderArray(props) {
  const arrayOfJSX = [<h1>1</h1>, <h1>2</h1>, <h1>3</h1>];

  return (
    <>
      {arrayOfJSX}
      {props.data.map((item, index) => <Card item={item} index={index}/>)}
    </>
  );
}

export default RenderArray;