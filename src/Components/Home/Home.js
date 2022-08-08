import './Home.css';
import { useState,useEffect } from 'react';
import rock from "../../img/rock.png";
import paper from "../../img/paper.png";
import scissor from "../../img/scissor.png";
import pencilart from "../../img/pencilart.png";
import xoimage from "../../img/xoimage.png";
import Signin from '../Signin/Signin';
import Register from '../Register/Register';

function Home({onPageRouteChange}) {

  const [route,setRoute]= useState('Home');
  function onHomechange(){
    
    if(route==='Signin'){
        document.getElementById('formDisplayer').style.visibility='visible';
        document.getElementById('Signinback').style.visibility='visible';
    }
    setRoute('Signin');
    document.getElementById("Home").style.overflow="hidden";
    document.getElementById("Home").style.height="100vh";
  
    document.getElementById("Home").style.position="relative";
  }
  
  return (
    <div className="Home" id="Home">
        {route==='Home'?
        <div className='body'>
            <div className="wrapper">
                <div className="Navigation">
                    <header>
                        <h1>XO GAME</h1>
                    </header>
                    <nav>   
                        <ul>
                            <li><a href="#sec1">Home</a></li>
                            <li><a href="#sec2">Why us</a></li>
                            <li><a href="#sec3">About Us</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="breakline"></div>
                <main>
                        <div className="Homepage" id="sec1">
                            <div className="upper-content">
                                <div className="text-intro">
                                    <h1>
                                        New Generation of XO
                                    </h1>
                                    <h3>
                                        creative gameplay
                                    </h3>
                                    <button onClick={onHomechange}>
                                        Try Now
                                    </button>
                                </div>
                                <div className="animation-wraper">
                                    <div className="animation-frame1">
                                        <img src={xoimage} className="table" alt="xotable"></img>
                                        <img src={pencilart} className="pencil" alt="pencil"></img>
                                    </div>
                                    <div className="animation-frame2">
                                        <img src={rock} className="rock" alt="rock"></img>
                                        <img src={paper} className="paper" alt="paper"></img>
                                        <img src={scissor} className="scissor" alt="scissor"></img>
                                    </div>
                                </div>
                            </div>

                            <div className="Transitioncontainer">
                                <div className="Transition"></div>

                            </div>


                        </div>  
                        <div className="WhyUs" id="sec2">
                            <h1>Three reasons for this game</h1>
                            <h3>• A fun, competitive game to play with friend</h3>
                            <h3>• New, creative way to play the tranditional game XO</h3>
                            <h3>• Ranking, title and more</h3>
                        </div>  
                        <div className="Transitioncontainer">
                            <div className="Transition"></div>

                        </div>         
                        <div className="aboutUs" id="sec3">
                            <h1>Credit to our developer </h1>
                            <div className="profilecard"> 
                                <h3>Hoang Nguyen</h3>
                                <h4>front-end</h4>
                                <div className="basicinfo textcard">• Computer science student</div>
                                <div className="textcard">• University of cincinnati 2025</div>
                            </div>
                        </div>
                    
                </main>
                
                <footer>
                </footer>
            </div>
        </div>
        :
        <div>
            <div className='body'>
                <div className="wrapper">
                    <div className="Navigation">
                        <header>
                            <h1>XO GAME</h1>
                        </header>
                        <nav>   
                            <ul>
                                <li><a href="#sec1">Home</a></li>
                                <li><a href="#sec2">Why us</a></li>
                                <li><a href="#sec3">About Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="breakline"></div>
                    <main>
                            <div className="Homepage" id="sec1">
                                <div className="upper-content">
                                    <div className="text-intro">
                                        <h1 >
                                            New Generation of XO
                                        </h1>
                                        <h3 >
                                            creative gameplay
                                        </h3>
                                        <button onClick={onHomechange}>
                                            Try Now
                                        </button>
                                    </div>
                                    <div className="animation-wraper">
                                        <div className="animation-frame1">
                                            <img src={xoimage} className="table" alt="xotable"></img>
                                            <img src={pencilart} className="pencil" alt="pencil"></img>
                                        </div>
                                        <div className="animation-frame2">
                                            <img src={rock} className="rock" alt="rock"></img>
                                            <img src={paper} className="paper" alt="paper"></img>
                                            <img src={scissor} className="scissor" alt="scissor"></img>
                                        </div>
                                    </div>
                                </div>

                                <div className="Transitioncontainer">
                                    <div className="Transition"></div>

                                </div>


                            </div>  
                            <div className="WhyUs" id="sec2">
                                <h1>Three reasons for this game</h1>
                                <h3>• A fun, competitive game to play with friend</h3>
                                <h3>• New, creative way to play the tranditional game XO</h3>
                                <h3>• Ranking, title and more</h3>
                            </div>  
                            <div className="Transitioncontainer">
                                <div className="Transition"></div>

                            </div>         
                            <div className="aboutUs" id="sec3">
                                <h1>Credit to our developer </h1>
                                <div className="profilecard"> 
                                    <h3>Hoang Nguyen</h3>
                                    <h4>front-end</h4>
                                    <div className="basicinfo textcard">• Computer science student</div>
                                    <div className="textcard">• University of cincinnati 2025</div>
                                </div>
                            </div>
                        
                    </main>
                    
                    <footer>
                    </footer>
                </div>
            </div>
            <div className='Signin'>
                    <div className='Signinback' id='Signinback'>
                       
                    </div>
                    <Signin  onPageRouteChange={onPageRouteChange}/>
            </div>
        </div>
        }
    </div>
  );
}

export default Home;



