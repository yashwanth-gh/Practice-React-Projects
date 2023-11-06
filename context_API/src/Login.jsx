import React, { useContext, useState } from 'react'
import userContext from './context/userContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(userContext);
    const handleClick = (e)=>{
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <>
    <div>login Here!</div>
    <input type='text' placeholder='User name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input type='text' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit" onClick={handleClick}>Login</button>
    </>
  )
}

export default Login