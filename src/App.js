import React from 'react';
import './App.css';
import SignIn from './Components/SignIn';
import { useAuth } from './providers/auth';


function App() {
  
  const {} = useAuth();

  return (
    <SignIn/>
  );
}

export default App;
