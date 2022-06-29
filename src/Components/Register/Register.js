import './Register.css';
import { useState,useEffect } from 'react';
import Signin from '../Signin/Signin';

function Register({onPageRouteChange}) {
  const [RegisterRoute,setRegisterRoute]=useState('Register');
  const onRegisterChange=(desiredChoice)=>{
    if(desiredChoice==='Home'){
      document.getElementById('formDisplayer').style.visibility='hidden';
      document.getElementById('Signinback').style.visibility='hidden';
      document.getElementById("Home").style.overflowY="visible";
      document.getElementById("Home").style.height="auto";
      document.getElementById("Home").style.position="relative";
   }else{
      setRegisterRoute(desiredChoice);
   }
  }
  return (
    <div>
      {RegisterRoute==='Register'?
        <div className="Register">
          <div className='RegisterForm'>
              <h1 onClick={()=>onRegisterChange('Home')} className='quit'>X</h1>
              <div>
                  <h1>Register</h1>
                  <div>
                      <input></input>
                  </div>
                  
                  <div>
                      <input></input>
                  </div>
                  {/* onClick={setRegisterRoute('Home')} */}
                  <div >
                      <button onClick={onPageRouteChange}>Register</button>
                      <h3>have an account?</h3>
                      <button onClick={()=>onRegisterChange('Signin')}>Sign in</button>

                  </div>    
              </div>        
          </div>
      </div>
      :
      <div className='SigninWrapper'>
        <Signin onPageRouteChange={onPageRouteChange}/>
      </div>
      }
    </div>
  );
}

export default Register;
