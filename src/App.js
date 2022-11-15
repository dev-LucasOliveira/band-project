import './App.css';
import AlternativeLogo from './AlternativeLogo';
import {useState} from 'react';


function App() {
  const [test, setTest] = useState ('true');
  function ChangeLogo() {
    setTest(!test);
  }
  return (
    <div className="App">
      {test ? <div className='logo'>LOGO</div> : <div className='logo-alternative'>LOGO</div>}
      <AlternativeLogo onChange={ChangeLogo}/>
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
      
      {console.log(test)}
    </div>
  );
}

export default App;
