
import React from 'react'
import './login.scss';

const Login = () =>{
  return(
      <div className='login-box'>
          <div>
          <form className='shadow-xl'>
                <h3>Welcome</h3>
                <div className="form-group poppins">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group poppins">
                    <label>Display Name</label>
                    <input type="string" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group poppins">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group poppins">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className='register-button'>
                <button type="submit" className="btn btn-primary btn-block m-1 ">Create An Account</button>
                </div>
            </form>
            </div>
     </div>
    )
}

export default Login;