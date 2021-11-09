import logo from './logo.svg';
import './App.css';
import Venue from './Venue/index';
import RsvpForm from './RsvpForm/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

function App() {

  return(
    <div>
      <Venue/>
      <RsvpForm/>
    </div>
  );
}

export default App;
