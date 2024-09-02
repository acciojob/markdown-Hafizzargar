import React, { useState } from 'react'



import "./styles/App.css";
import { useEffect } from 'react';
// import { useEffect,useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [m,setm]=useState('loading...');
  function handleMarkdownChange(e){
    setMarkdown(e.target.value);

  }
  useEffect(()=>{
    setm(markdown);

  },[markdown])
  // function abc(){git
  //   setm(markdown);

  // }


  return (
    <div className="app">
       <div>
      <div>
        <textarea className='textarea' value={markdown} onChange={handleMarkdownChange} />
      </div>
      {/* <button onClick={abc}>Submit</button> */}
      <div>
        <div className="preview"><h1>{m}</h1></div>
      </div>
    </div>
      
    </div>
  );
}

export default App

