import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';


function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/EMPLOYEEAPP' element={<Home/>}></Route>
        <Route path='/EMPLOYEEAPP/form' element={<Form/>}></Route>
      </Routes> 
       
    </div>
  );
}

export default App;
