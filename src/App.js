import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
function App() {
  // function getchecking(){
  //   fetch('https://userapi20220605151559.azurewebsites.net/user')
  //   .then(response => response.json())
  //   .then(data=> setName(data[0].name) )
  // }
  // function postchecking(){
  //   fetch('https://userapi20220605151559.azurewebsites.net/user', {
  //       method: 'put',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         id:16,
  //         name: "CAUNnguvl",
  //         email: "Caunnguvl@mail.uc.edu"         
  //       })
  //     })
  //     .then(response=>response.json())
  //     .then(response => 
  //       console.log( response)
  //     )
  //     .catch(err => console.log(err));
  // }
  // const [route,setRoute]=useState('register');
  // let page;
  // function onEverythingChange(choice){
  //   setRoute(choice);
  // }
  
  // if(route==='Signin'){
  //   page=<Signin onEverythingChange={onEverythingChange}/>;
  // }else{
  //   page=<Register onEverythingChange={onEverythingChange}/>;

  // }
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
{/* 
      <Profile/>
      <Rank/>
      <Match/>  */}
    </div>
  );
}

export default App;
