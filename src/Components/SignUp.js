import Dashboard from './Dashboard';
import JoinPage from './JoinPage';
import SignIn from './SignIn';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';


function SignUp() {
    
    return (
        <div>
            <BrowserRouter>
            <ul>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li><Link to="/JoinPage">JoinPage</Link></li>
                <li><Link to="/SignIn">SignIn</Link></li>
            </ul>
                <Routes>
                    <Route path= "/Dashboard" element={<Dashboard/>}></Route>
                    <Route path= "/JoinPage" element={<JoinPage/>}></Route>
                    <Route path= "/SignIn" element={<SignIn/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default SignUp;