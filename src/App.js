import logo from './logo.svg';
import './App.css';
import Venue from './Venue/index';
import RsvpForm from './RsvpForm/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Venue />
      </header>
      <footer>
        <RsvpForm />
      </footer>
    </div>
  );
}

export default App;
