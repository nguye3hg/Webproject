
import './Signin.css';
import {useEffect,useState} from 'react';
import Register from '../Register/Register';
function Signin({onPageRouteChange}) {
    const [SigninRoute,setSigninRoute]=useState("Signin");
    const onSigninChange=(desiredChoice)=>{
         if(desiredChoice==='Home'){
            document.getElementById('formDisplayer').style.visibility='hidden';
            document.getElementById('Signinback').style.visibility='hidden';
            document.getElementById("Home").style.overflowY="visible";
            document.getElementById("Home").style.height="auto";
            document.getElementById("Home").style.position="relative";
         }else{
            setSigninRoute(desiredChoice);
         }
        
      }
  return (
    <div id='formDisplayer'>
        
        {SigninRoute==='Signin'?
        <div className="SigninPart">
            
            <div className='SigninForm'>
                <h1 onClick={()=>onSigninChange('Home')} className='quit'>X</h1>
                <div>
                    <h1 >WELCOME</h1>
                    <div>
                        <input></input>
                    </div>
                    
                    <div>
                        <input></input>
                    </div>
                    {/* onClick={onSigninChange('Home')} */}
                    <div className='Option'>
                        <button onClick={onPageRouteChange}>Sign in</button>
                        <h3>or</h3>
                        <button  onClick={()=>onSigninChange('Register')}>Register</button>

                    </div>    
                </div>        
            </div>
        </div>:
        <div className='RegisterWrapper'>
            <Register onPageRouteChange={onPageRouteChange}/>
        </div>
        }
    </div>
  );
}

export default Signin;
