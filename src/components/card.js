
function Card(props){
    return <div className="card" onClick={() => props.clickEvent(props.source)}>
        <img src={props.source} alt="character"/>
        <div>{props.name}</div>
    </div>
}


export default Card;