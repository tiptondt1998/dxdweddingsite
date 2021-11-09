import logo from './logo.svg';
import './App.css';
import Venue from './Venue/index';
import RsvpForm from './RsvpForm/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem('id_token');
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : '',
//       },
//     });
//   },
//   uri: 'http://localhost:3001/graphql',
// });

function App() {
  return(
    <div>
    The wedding will take place at Margartiaville Beach Hotel.
    <br/>
    Address: 165 FORT PICKENS ROAD, PENSACOLA BEACH, FL 32561
    <Footer/>
    </div>
/* <ApolloProvider client={client}>
  <Router>
        <div className="App">
      <Route exact path='/' component={Venue}/>
       <footer>
        <RsvpForm />
      </footer>
    </div>
  );
  </Router>
</ApolloProvider> */
  );
}

export default App;
