
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';

function App() {

  return (
    <BrowserRouter>
        <h2>Welcome to your first Axios CRUD application</h2>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
        <Route path='/Read/:id' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
