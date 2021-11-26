import Ejercicios from './listaEjercicios';
import Calculator from './temperatura'
import { 
  BrowserRouter as Router ,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';



function App2() {
  return (
    <Router>
      <div className="Container">
       <div className="App">      
        <NavLink to="/" className="btn btn-dark">Inicio</NavLink>
        <Routes>
                <Route path="/temperatura" element={<Calculator/> } ></Route>
                <Route path="/" exact element={
                    <Ejercicios>  
                        <NavLink to="/temperatura"  className="btn btn-dark"> Temp °C - °K</NavLink>
                    </Ejercicios>}
                >
                </Route>
        </Routes>
       </div>
    </div>
    </Router>    
  );
}
export default App2;
