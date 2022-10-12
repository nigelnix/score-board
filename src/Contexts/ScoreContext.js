import {useState, createContext} from 'react'

export const ScoreContext = createContext();

export default function ScoreContextProvider({children}){


const [score , setScores] =useState(0)


  
  function plusScore(){
   setScores(score + 10) ;
  }

  function minusScore(){
    setScores(score -10) ;
  }



return (

<ScoreContext.Provider  value={{score , plusScore , minusScore}}>

{children}

</ScoreContext.Provider>



)

}
