function Card(props){
    return <span className={props.className}>
        <h1>{props.heading}</h1>
        <img src={props.img} alt=""></img>
        <p>{props.para}</p>
    </span>
}
Card.defaultProps={
    para:"",
};
export default Card;