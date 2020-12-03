import React, { useState, useEffect } from "react";

// create a functional component
const HelloExpress = () => {
  const [content, setContent ] = useState('...loading')
  // call once on load 
  useEffect(() => {    
    fetch('http://127.0.0.1:8000/')
        .then(response => response.text())
        .then(text => {
          setContent(text)
        })        
  }, []);

 return (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)};

function App() {
  return (
    <div className="App">
     Hello World from React! 
     <br/>
     <HelloExpress />
    </div>
  );
}

export default App;