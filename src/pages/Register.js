import React, { useState } from 'react';
import {Link} from "react-router-dom";
import '../styles/register.css';

const Register = () => {
  const initialState = {username:'', fullname:'', email:''}
  const [username,setUsername] = useState( '' );
  const [fullname,setFullname]= useState('');
  const [email,setEmail] = useState( '' );
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword]= useState('');
  const [showpass, setShowpass] = useState(false);
  const [showcfpass, setShowcfpass] = useState(false);
  return (
    <div className='register'>
    <div className='register-container'>
      <h3 className='register-header'>Simple Social Media Feed</h3>
      <h6 className='register-subheader'>Register</h6>
      {/* <div className='login-data'> */}
      <form className='register-dataform' >
        <input className='register-dataformemail' type='text' value={fullname} onChange={(e)=>setFullname(e.target.fullname)} placeholder='Enter Your fullName'></input>
        <input className='register-dataformpass'type='text' placeholder='Enter your Username' value={username} onChange={(e)=>setPassword(e.target.username)}></input>
        <input className='register-dataformemail' type='email' value={email} onChange={(e)=>setEmail(e.target.email)} placeholder='Enter Your Email'></input>
        <input className='register-dataformpass'type={showpass ? "type":"password"} placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <small className='register-showpass' onClick={()=>setShowpass(!showpass)}>{showpass? "Hide":"Show"}</small>
        <input className='register-dataformpass'type={showcfpass ? "type":"password"} placeholder='Enter your password again' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
        <small className='register-showcfpass' onClick={()=>setShowcfpass(!showcfpass)}>{showcfpass? "Hide":"Show"}</small>
        <button className='register-datafrombtn' type="submit">Register</button>
        <p className='register-small'>Already have an account <Link to="/">Login HERE</Link></p>
      </form>       
    </div>
     </div>
  );
};

export default Register
