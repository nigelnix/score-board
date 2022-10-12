
import ScoreComponent from './Components/ScoreComponent';
import './App.css';
import ScoreContextProvider  from "./Contexts/ScoreContext"
import InfoBoard from './Components/InfoBoard'

function App() {



  return (
    <ScoreContextProvider>
    <div className='score-container'>
      <div className="App">
    <ScoreComponent />
    <InfoBoard />
  </div>
  </div>
  </ScoreContextProvider>
  );
}

export default App;
