import JoinPage from './JoinPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/SignIn">SignIn</Link></li>
                    <li><Link to="/JoinPage">JoinPage</Link></li>
                    <li><Link to="/SignUp">SignUp</Link></li>
                </ul>
                <Routes>
                    <Route path= "/SignIn" element={<SignIn/>}></Route>
                    <Route path= "/JoinPage" element={<JoinPage/>}></Route>
                    <Route path= "/SignUp" element={<SignUp/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        
    );
}

export default Dashboard;