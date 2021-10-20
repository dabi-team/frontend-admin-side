
import React from 'react'
import { useHistory } from 'react-router';
import './login.scss';

const Login = () =>{
    const history = useHistory();
  return(
      <div className='login-box'>
          <div>
          <form className='shadow-xl'>
                <h3>Welcome back</h3>
                <div className="form-group poppins">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group poppins">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className='button-container grid-button poppins'>
                <button type="submit" onClick={()=>history.push('/')} className="btn btn-primary btn-block m-1">Login</button>
                <button type="submit" onClick={()=>history.push('/Register')} className="btn btn-primary btn-block m-1 signup">Create An Account</button>
                </div>
            </form>
            </div>
     </div>
    )
}

export default Login;