import logo from './logo.svg';
import './App.css';
import Venue from './Venue/index';
import RsvpForm from './RsvpForm/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {useState} from 'react';

const Page = ({name}) => {
  switch(name){
    case 'Venue': return <Venue />;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('Venue');
  const handlePageChange = (value) => setCurrentPage(value);

  return(
    <div>
          <div id="nav">
      <Nav handlePageChange ={handlePageChange} />
      </div>
      <div>
        <Page name={currentPage} />
      </div> 
    </div>
  );
}

export default App;
