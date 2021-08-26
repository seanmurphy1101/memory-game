import Card from './card'

function Board(props){
    let elements = [];
    let index = 0;
    for (let i=0; i<4; ++i){
        for (let j=0; j<3; ++j){
            elements.push(<Card id={i.toString()+j.toString()} clickEvent={props.clickEvent} number={i.toString()+j.toString()} className='card' name={props.cards[index].name} source={props.cards[index].source}></Card>);
            ++index;
        }
    }
    return <div id="board">{elements}</div>
}


export default Board;