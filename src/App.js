import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './NavbarComponents/Home';
import Login from './NavbarComponents/Login';
import SignUp from './NavbarComponents/SignUp';
import Header from './NavbarComponents/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
