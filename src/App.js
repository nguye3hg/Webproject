import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
function App() {  
  const [pageRoute,setPageRoute]=useState('Home');
  function onPageRouteChange(){
    setPageRoute('Profile');
    
  }
  return (
    <div className="App">
      {pageRoute==='Home'?
              <Home onPageRouteChange={onPageRouteChange}/>
        :
        <Profile/>
      }      
    </div>
  );
}

export default App;
