import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData] = useState([]);
    const data =useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/yashwanth-gh')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         return setData(data)})
    //     .catch(console.log("problem fetching"))
    // }, [])
    
  return (
    <>
    <div>
        <img src={data.avatar_url} alt="" />
    </div>
    <div>
        Name : {data.name}
        Github followers : {data.followers}
    </div>
    </>
  )
}

export default Github
export const githubUserData = async ()=>{
    const response = await fetch('https://api.github.com/users/yashwanth-gh')
    return response.json();
}