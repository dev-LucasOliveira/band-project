import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import JoinPage from './Components/JoinPage';
import SignIn from './Components/SignIn';
import { useAuth } from './providers/auth';
import SignUp from './Components/SignUp';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import { Button, Grid } from '@mui/material';


function App() {
  
  const {} = useAuth();

  return (
    <div>
      <div>
        <BrowserRouter>
          <ul>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/JoinPage">JoinPage</Link></li>
            <li><Link to="/SignIn">SignIn</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul>
          <Routes>
            <Route path= "/Dashboard" element={<Dashboard/>}></Route>
            <Route path= "/JoinPage" element={<JoinPage/>}></Route>
            <Route path= "/SignIn" element={<SignIn/>}></Route>
            <Route path= "/SignUp" element={<SignUp/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <SignIn/>
    </div>
    
  );
}

export default App;
