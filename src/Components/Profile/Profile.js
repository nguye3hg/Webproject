
import './Profile.css';
import {useEffect,useState} from 'react';
import monster from "./monster.jpg";
import King from "./King.png";
import pawn from "./pawn.png";
import Rook from "./Rook.png";
import Rank from '../Rank/Rank';
function expandOnClick(){
    document.getElementById('rankPage').style.animation='expand 5s ease-in-out forwards';
    document.getElementById('rankPage').style.position='absolute';
    document.getElementById('winRate').style.animation='goneout 5s ease-in-out forwards';
    document.getElementById('onlineStreak').style.animation='goneout 5s ease-in-out forwards';
    document.getElementById('playerCardWrapper').style.animation='goneout 5s ease-in-out forwards';
    document.getElementById('findMatch').style.animation='goneout 5s ease-in-out forwards';  
    document.getElementById('onOffSymbol').style.animation='goneout 5s ease-in-out forwards';
    document.getElementById('closingX').style.animation='gonein 5s ease-in-out forwards';
    document.getElementById('closingX').style.marginTop='-10vh';
    document.getElementById('closingX').style.marginLeft='95vw';
    document.getElementById('Rank').style.animation='gonein 5s ease-in-out forwards';

    // document.getElementById('yourRank').style.animation='diagonal-move 5s ease-in-out';
}
function collapseOnClick(){
    document.getElementById('rankPage').style.animation='collapse 5s ease-in-out forwards';
    document.getElementById('rankPage').style.animation='floating 3s ease-in-out infinite';
    document.getElementById('rankPage').style.position='relative';    
    document.getElementById('winRate').style.animation='gonein 5s ease-in-out forwards';
    document.getElementById('closingX').style.animation='goneout 5s ease-in-out forwards';
    document.getElementById('onlineStreak').style.animation=' gonein 5s ease-in-out forwards';
    document.getElementById('playerCardWrapper').style.animation='gonein 5s ease-in-out forwards';
    document.getElementById('findMatch').style.animation='gonein 5s ease-in-out forwards';  
    document.getElementById('onOffSymbol').style.animation='gonein 5s ease-in-out forwards';
    document.getElementById('winRate').style.animation='floating 3s ease-in-out infinite';
    document.getElementById('onlineStreak').style.animation='floating 3s ease-in-out infinite';

}
const XOList=[];
for(let i = 0; i < 25; i++) {
    XOList.push(new Array(25));
}

let ClickCount=0;
function CheckingXO(){
    ClickCount=ClickCount+1;
    
}
function checkWin(e){
    const itemId=e.currentTarget.id;
         let row=Math.floor(parseInt(e.currentTarget.id)/10);
         let column=parseInt(e.currentTarget.id)-Math.floor(parseInt(e.currentTarget.id)/10)*10;
         let countXdia1=0;
         let countYdia1=0;
         let countYdia2=0;
         let countXdia2=0;
         let countYhor=0;
         let countXhor=0;
         let countYver=0;
         let countXver=0;
         for(let a=row-4;a<=row+4;a++){
           let b=column;
               if(XOList[a][b]===1)
     
                   {
                       countXdia1=countXdia1+1;
                   }
               if(XOList[a][b]===2){
                   countYdia1=countYdia1+2;
               }
           b++;
         }
         for(let a1=row-4;a1<=row+4;a1++){
           let b1=column;
               if(XOList[a1][b1]===1)
     
                   {
                       countXdia2=countXdia2+1;
                   }
               if(XOList[a1][b1]===2){
                   countYdia2=countYdia2+2;
               }
           b1--;
         }
         for(let a2=row-4;a2<=row+4;a2++){
           let b2=column;
               if(XOList[a2][b2]===1)
     
                   {
                       countXhor=countXhor+1;
                   }
               if(XOList[a2][b2]===2){
                   countYhor=countYhor+2;
               }
         }
         for(let a3=column-4;a3<=column+4;a3++){
           let b3=row;
               if(XOList[b3][a3]===1)
     
                   {
                       countXver=countXver+1;
                   }
               if(XOList[b3][a3]===2){
                   countYver=countYver+2;
               }
           b3++;
         }
         if(countXdia1===5 ||
           
            
            countXdia2===5 ||
            
            countXhor===5 ||
           
            countXver===5){
               console.log('O Win');
            }
          if( countYdia1===10 ||
           countYdia2===10 ||
           countYhor===10 ||
           countYver===10 
          ){
               console.log('X Win');
          }
}
function playOnClick(e){
    
    if(!document.getElementById(e.currentTarget.id).innerHTML){
        if(ClickCount%2===0){
            document.getElementById(e.currentTarget.id).appendChild(document.createTextNode("X"));
            XOList[Math.floor(parseInt(e.currentTarget.id)/10)][parseInt(e.currentTarget.id)-Math.floor(parseInt(e.currentTarget.id)/10)*10]=2;
         }else{
            document.getElementById(e.currentTarget.id).appendChild(document.createTextNode("O"));
            XOList[Math.floor(parseInt(e.currentTarget.id)/10)][parseInt(e.currentTarget.id)-Math.floor(parseInt(e.currentTarget.id)/10)*10]=1;
         }
        
    }else{
        ClickCount=ClickCount-1;
    }
    checkWin(e);
}
 const XOboard=[];
// function checkWin(e){
//     // for(let m=0;m<25;m++){
//     //     for(let n=0;n<25;n++){

//     //     }
//     // }
//     let row=Math.floor(parseInt(e.currentTarget.id)/10);
//     let column=parseInt(e.currentTarget.id)-Math.floor(parseInt(e.currentTarget.id)/10)*10;
//     if((XOList[row][column]==='O' && XOList[row-1][column-1]==='X')||){
//         console.log('WIN');
//     }
// }


for (let i = 0; i < 25; i++) {
    for (let j=0;j<25;j++){
        XOboard.push(<div  id={`${j}`+`${i}`} onClick={playOnClick} className={'square'}></div>);
    }
}

function Profile(){ 
    const [profileRoute,setProfileRoute]=useState('Profile');
    function slideOnClick(){
        document.getElementById('rankPage').style.animation='slideOut 5s ease-in-out forwards';
        document.getElementById('winRate').style.animation='slideOut 5s ease-in-out forwards';
        document.getElementById('onlineStreak').style.animation='slideOut 5s ease-in-out forwards';
        document.getElementById('playerCardWrapper').style.animation='goneout 5s ease-in-out forwards';
        document.getElementById('findMatch').style.animation='goneout 5s ease-in-out forwards';
        setProfileRoute('Match')
    
    }
    return (
        <div id='Profile'>
            <div className="logoBar">The Crox</div>
            <div className='profileInfo'>
                <div className='onlineStreak' id='onlineStreak'>
                    <h1> Online Streak:</h1>
                    <div className="symbolWrapper2">
                        <div className='symbol1'><img src={pawn} alt="pawn"></img></div>

                    </div>
                </div>
                <div className='rankBoard' id='rankPage' >
                    <h1 id='yourRank' >Rank:</h1>
                    <h1 id='closingX' onClick={collapseOnClick}>X</h1>
                    <Rank id='onOffRank'/>
                    <div className="symbolWrapper2">
                        <div className='symbol2' id='onOffSymbol' onClick={expandOnClick}><img src={King} alt="King"></img></div>

                    </div>
                </div>
                <div className='winRate' id='winRate'>
                    <h1>Winrate:</h1>
                    <div className="symbolWrapper2">
                        <div className='symbol3'><img src={Rook} alt="Rook"></img></div>

                    </div>
                </div>
            </div>
            <div className='playerCardWrapper' id='playerCardWrapper'>
                <div className='profilePic'><img src={monster} alt='avatar'></img></div>
                <div className='playerCard'><h3>Subject.1898</h3><h3>Hoang Nguyen</h3></div>
            </div>
            <div className='findMatch' id='findMatch'>
                <button onClick={slideOnClick}> Find Match!</button>
            </div>
            {profileRoute==='Match'?
             <div className='MatchContainer'>
                    <div className='playerCardWrapper' id='allies'>
                        <div className='profilePic'><img src={monster} alt='avatar'></img></div>
                        <div className='playerCard'><h3>Subject.1898</h3><h3>Hoang Nguyen</h3></div>
                    </div>
                    <div className='Match' onClick={CheckingXO}>
                        {XOboard}
                    </div>
                    
                    <div className='playerCardWrapper' id='oponent'>
                        <div className='playerCard'><h3>Subject.6969</h3><h3>Cẩun Pham</h3></div>
                        <div className='profilePic'><img src={monster} alt='avatar'></img></div>
                        
                    </div>
             </div>
             :
             <div>
             </div>
            }
        </div>
      );
}
  


export default Profile;
