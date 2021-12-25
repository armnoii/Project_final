import * as React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const login = () => {
    return (
      <body>
        <div className='li'>
          <div className='color'>
            <h1>Sign in</h1>
            <div className='ip'>
              <input placeholder='Your Email'>
              </input>
              <input placeholder='Your Password' type='password'>
              </input>
              <Button variant="primary">CONTINUE</Button>{' '}
            </div>

            <div className='ip2'>
              <a>Forgot password</a>
            </div>

            <div className='ip'>
              <Button variant="dark">Create new account</Button>{' '}
            </div>

          </div>

          <div className='color2'></div>
        </div>
      </body>
    );
  };
  
export default login;
  
  
  