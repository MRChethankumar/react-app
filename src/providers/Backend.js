import { API } from "../configs/Configs";

export const authenticate = async ( user )=>{
    
    return fetch("http://localhost:8000/api/account/signin",{
          method:"POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user),
          credentials:'include'
        })
        .then((response)=> response)
        .catch((error)=>console.log(error))
}