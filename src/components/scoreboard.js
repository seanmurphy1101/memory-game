
function Score(props){
    return <div id="scoreboard">
        <p>Current Score: {props.score}</p>
        <p>High Score: {props.highscore}</p>
    </div>
}


export default Score;