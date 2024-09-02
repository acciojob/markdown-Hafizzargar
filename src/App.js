import React, { useState } from 'react'



import "./styles/App.css";
// import { useEffect,useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [m,setm]=useState('loading...');
  function handleMarkdownChange(e){
    setMarkdown(e.target.value);

  }
  function abc(){
    setm(markdown);

  }


  return (
    <div className="app">
       <div>
      <div>
        <textarea className='textarea' value={markdown} onChange={handleMarkdownChange} />
      </div>
      <button onClick={abc}>Submit</button>
      <div>
        <div className="preview">{m}</div>
      </div>
    </div>
      
    </div>
  );
}

export default App

