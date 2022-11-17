import Dashboard from './Dashboard';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';

function JoinPage() {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                    <li><Link to="/SignIn">SignIn</Link></li>
                    <li><Link to="/SignUp">SignUp</Link></li>
                </ul>
                <Routes>
                    <Route path= "/Dashboard" element={<Dashboard/>}></Route>
                    <Route path= "/SignIn" element={<SignIn/>}></Route>
                    <Route path= "/SignUp" element={<SignUp/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        
    );
}

export default JoinPage;