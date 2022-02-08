import './App.css';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import {Nav,Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import RestaurantsDetails from './components/RestaurantsDetails';


function App() {
  return (
    <Router>

      <main className="py-3">
        <Container>

          <Route exact path='/' component={Home} /> 
          <Route path='/restaurants/:id' component={RestaurantsDetails}/>
        </Container>

      </main>

    </Router>
  );
}

export default App;