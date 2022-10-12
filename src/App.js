
import ScoreComponent from './Components/ScoreComponent';
import './App.css';
import ScoreContextProvider  from "./Contexts/ScoreContext"
import InfoBoard from './Components/InfoBoard'

function App() {



  return (
    <ScoreContextProvider>
    <div className='score-container'>
      <div className="App">
        <h3>It's only test</h3>
    <ScoreComponent />
    <InfoBoard />
  </div>
  </div>
  </ScoreContextProvider>
  );
}

export default App;
