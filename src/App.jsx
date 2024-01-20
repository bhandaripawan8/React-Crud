
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
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
