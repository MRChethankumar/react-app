import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function App() {

  let user = {
    username: 'kmrchethan',
    password: '12345678'
  };

  let navigate = useNavigate();
  let location = useLocation();

  
  const fetFeeds = async ()=>{
    try{
      let response = await fetch("http://localhost:8000/home", 
      {credentials:'include'});
      let data = await response.json();
    }
    catch{

    }
  }

  const logOut = async ()=>{

    try{
      let response = await fetch("http://localhost:8000/api/account/logout", 
      {credentials:'include'});
      let data = await response.json();
      navigate('/signin');
    }
    catch(e){}

  }

  return (
    <div className="App">
      <h1>Hello Word.</h1>
      <button onClick={fetFeeds}>Feeds</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default App;
