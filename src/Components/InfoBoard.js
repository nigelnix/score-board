import {useContext} from 'react'
import {ScoreContext} from "../Contexts/ScoreContext" 

function InfoBoard() {
    const {score}= useContext(ScoreContext)
    // if (score > 100){
    //    return
    // }else {
    //    return <h3>"Let's make it over 100!"</h3>
    // }
     
  return (
    <div>
        {score>=100? <h3>"Good Job!"</h3>:<h3>"Let's make it over 100!"</h3>}

        
    </div>
  )
}

export default InfoBoard