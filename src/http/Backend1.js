import { API } from "../configs/Configs";

export const getOtp = async ( credentials )=>{
    return fetch(`${API}/api/admin/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(credentials)
    })
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}

export const signIn = async ( credentials )=>{
    return fetch(`${API}/api/admin/validateOtp`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(credentials)
    })
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}