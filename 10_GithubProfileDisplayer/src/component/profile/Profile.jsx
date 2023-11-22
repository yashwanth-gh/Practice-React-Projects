import React, { useEffect, useState } from 'react';
import { useProfile } from '../../context';
import { useLoaderData } from 'react-router-dom';

function Profile() {
  // const profileInfo = useLoaderData();
  const {userID} = useProfile();
  const [data,setData] = useState({});
  useEffect(()=>{
    fetch(`https://api.github.com/users/${userID}`)
    .then(res=>res.json())
    .then(res=>setData(res))
    .catch((error)=>{console.log(error)})

  },[])
  return (
<>
    <div>{data.login}</div>
    <img src={data.avatar_url} alt="" />
</>
  )
}

export default Profile
//! error: Unexpected Application Error!
/*
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
*/
// export const getProfileInfo = async ()=>{
//   const {userID} = useProfile();
//   const responce = await fetch(`https://api.github.com/users/${userID}`)
//   .catch((error)=>{console.log(error)})
// return responce.json();
// }