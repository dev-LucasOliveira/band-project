import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import SignIn from '.components/SignIn';
import SignOut from '.components/SignOut';
import JoinPage from '.components/JoinPage';
import Dashboard from '.components/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Link to='/signin'></Link>
      <Link to='/signout'></Link>
      <Link to='/joinpage'></Link>
      <Link to='/dashboard'></Link>
      <Routes>
        <Route path='/signIn'>
          <SignIn />
        </Route>
        <Route path='/signout'>
          <SignOut />
        </Route>
        <Route path='/joinpage'>
          <JoinPage />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
