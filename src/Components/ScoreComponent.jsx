import { useContext } from 'react';
import {ScoreContext} from '../Contexts/ScoreContext'
function ScoreComponent() {

    const {score , plusScore , minusScore}= useContext(ScoreContext)
  return (
    <div>
        <h2>Score Board</h2>
        <h3 className="score-text" >{score}</h3>
        <div>
            <button  onClick={plusScore}>+</button>
            <button onClick={minusScore}>-</button>
        </div>
       
    </div>
  )
}

export default ScoreComponent