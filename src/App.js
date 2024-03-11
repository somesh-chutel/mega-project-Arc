import { Route,Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import NotFound from './components/NotFound';
import Login from './components/Login';
import './App.css';

function App() {

  

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
