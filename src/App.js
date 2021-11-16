import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch, } from 'react-router-dom';
import AppCars from './pages/AppCars';

function App() {
  return (

    <BrowserRouter>
      <nav>
        <Link to='/'> Home</Link>
        <Link to='/cars'> Cars</Link>

      </nav>
      <Switch>

        <Route path='/cars'>
          <AppCars />
        </Route>


      </Switch>
    </BrowserRouter>

  );
}

export default App;
