
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  )

}

export default App;
