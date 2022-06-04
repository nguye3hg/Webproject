import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Hoang');
  function onInputChange(event){   
    setName(event.target.value);
  }
  function onButtonSubmit(){
    // fetch('https://ornate-tartufo-20c28a.netlify.app/api/Users',{
    //   method:'get',
    //   headers: {'Content-type':'application/json'},
    //   body: JSON.stringify({
    //     name: name
    //   })
    // })
    // console.log(name);
    fetch('https://ornate-tartufo-20c28a.netlify.app/api/Users')
        .then(response => response.json())
        .then(data => setName(data));
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <input onChange={(e)=>onInputChange(e)}/>
      <button onClick={onButtonSubmit}/>
    </div>
  );
}

export default App;
