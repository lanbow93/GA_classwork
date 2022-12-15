function Player(props) {
    return (
        <div className={props.currentPlayer}>
          <h2>Player {props.currentPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
  }
  
  export default Player;