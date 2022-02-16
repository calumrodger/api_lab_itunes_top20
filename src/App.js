import './App.css';
import SongContainer from './containers/SongContainer';
import GenreSelector from './components/GenreSelect';

function App() {
  console.log("we're in");
  return (
    <div className="App">
    <h1>UK Top 20</h1>
    <SongContainer/>
    </div>
  )};

export default App;
