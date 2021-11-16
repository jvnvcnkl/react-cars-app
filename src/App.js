import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch, } from 'react-router-dom';
import AppCars from './pages/AppCars';
import AddCar from './components/AddCar';
import NavBar from './components/NavBar';
function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route path='/cars'>
          <AppCars />
        </Route>
        <Route path='/add'>
          <AddCar />
        </Route>


      </Switch>
    </BrowserRouter>

  );
}

export default App;
