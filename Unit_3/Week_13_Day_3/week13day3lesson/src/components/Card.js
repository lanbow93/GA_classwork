function Card({ item, index }) {
    return (
      <div key={index}>
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    );
  }
  
  export default Card;