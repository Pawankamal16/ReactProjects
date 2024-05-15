import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  
    const data = useLoaderData()
//    const [data,setData] = useState([])
//     //whenever component is uploading then call useEffect api when click on GitHub
//     useEffect ( () =>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         //fetch('https://github.com/Pawankamal16')
//         .then( res => res.json())
//         .then ( data =>{
//             console.log(data);
//             setData(data)
//         })
//     }, [])

  return (
    <div  className=' text-center bg-gray-400  m-4 p-4 text-black text-3xl '>
       GitHub Followers:  {data.followers}
       <img src={data.avatar_url} alt="Git picture" width= {300} />
    </div>
  )

}


export default Github

export const githubInfoLoader = async () =>{
    
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
