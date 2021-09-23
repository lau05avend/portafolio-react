import './App.scss';
import {
  BrowserRouter as Router,   //
  Switch,   //controlar renderizado de los elementos, y manejas las rutas
  Route   //cada una de las rutas establecidas
} from "react-router-dom"
import Portafolio from './pages/Portafolio';
import Error404 from './pages/Error404';
import Home from './pages/Home';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/portafolio" >
              {/* <h1>chaoooo</h1> */}
                <Portafolio /> 
            </Route>
            <Route path="*">
                <Error404 />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
