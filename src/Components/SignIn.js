import Dashboard from './Dashboard';
import JoinPage from './JoinPage';
import SignUp from './SignUp';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';


function SignIn() {
    
    return (
        <div className="App">
            <div className='logo'>LOGO</div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                    <li><Link to="/JoinPage">JoinPage</Link></li>
                    <li><Link to="/SignUp">SignUp</Link></li>
                </ul>
                <Routes>
                    <Route path= "/Dashboard" element={<Dashboard/>}></Route>
                    <Route path= "/JoinPage" element={<JoinPage/>}></Route>
                    <Route path= "/SignUp" element={<SignUp/>}></Route>
                </Routes>
            </BrowserRouter>
            <div className='input-box'>
                <div className='title-input-box'>
                    <p className='title-input'>
                        Faça o Login:
                    </p>
                </div>
                <div className='input-div'>
                    <input type='text' id='user-input' className='input' required/>
                    <label htmlFor='user-input' className='label'>Usuário:</label>
                </div>
                <div className='input-div'>
                    <input type='text' id='password-input' className='input' required/>
                    <label htmlFor='password-input' className='label'>Senha:</label>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    );

}

export default SignIn;