// import React from 'react'

import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../styles/login.css";
import { login } from '../redux/actions/authActions';
import {useDispatch} from 'react-redux';


   

const Login = () => {
  // const [message, setMessage]= useState( '' );
  const initialState = {email:'',password:''}
  // const [email,setEmail] = useState( '' );
  // const [password, setPassword]= useState('');
  const [showpass, setShowpass] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const dispatch = useDispatch();
  const {email, password} = userData;

  const handelChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData,[name]:value})
  }
const handleSubmit = async (e) =>{
  e.preventDefault();
  // setUserData({email,password})
  await dispatch(login(userData));
}

  return (
    <div className='login'>
    <div className='login-container'>
      <h3 className='login-header'>Simple Social Media Feed</h3>
      <h6 className='login-subheader'>Login</h6>
      {/* <div className='login-data'> */}
      <form className='login-dataform' onSubmit={handleSubmit}>
        <input className='login-dataformemail' type='email' value={email} name='email' onChange={handelChange} placeholder='Enter Your Email'></input>
        <input className='login-dataformpass' type={showpass ? "type":"password"} placeholder='Enter your password' value={password} name='password' onChange={handelChange}></input>
        <small className='login-showpass' onClick={()=>setShowpass(!showpass)}>{showpass? "Hide":"Show"}</small>
        <button className='login-datafrombtn' type="submit">Log In</button>
        <p className='login-small'>Do note have account <Link to="/register">Create HERE</Link></p>
      </form>       
    </div>
     </div>
  );
};

export default Login
