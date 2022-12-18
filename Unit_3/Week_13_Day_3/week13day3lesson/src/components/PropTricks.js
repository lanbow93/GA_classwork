function PropTricks({bread, cheese, ...props }) {
    return <h1>{bread + " " +  cheese + " " + props.dessert + " " + props.vegatable}</h1>
}

export default PropTricks