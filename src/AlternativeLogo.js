import * as React from 'react';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function HelloWorld(props) {
  const {onChange} = props;
  return (
    <div>
      <div className='input-box-alternative'></div>
      <div>
        <Button onClick={onChange} variant="contained">Change Logo Color</Button>
      </div>
    </div>
  );
}


