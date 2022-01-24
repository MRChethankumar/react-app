import { API } from "../configs/Configs";

export const isAuthenticated = ()=>{

    var xhttp = new XMLHttpRequest();
    try{
        xhttp.open('GET',`http://localhost:8000/api/account/check/auth`, false)
        xhttp.withCredentials = true;
        xhttp.send(null);
        if(xhttp.status === 202){
            let response = JSON.parse(xhttp.response);
            if(response.isAuthenticated){
                return true;
            }
        }
    }
    catch(e){}
    return false;
}
