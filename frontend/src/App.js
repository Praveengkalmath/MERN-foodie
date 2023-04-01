import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import SignUp from './components/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePortal from './components/homePortal';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/singUp' element={<SignUp />} />
          <Route path='/home/*' element={<HomePortal/>}/>
      
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
