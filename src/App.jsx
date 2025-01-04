import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import render from 'react-dom'
import Markdown from 'react-markdown'


function App() {
  const [text, setText] = useState("")
  const [res, setRes] = useState("");

  const answerGenerator = async () => {
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=*********************************",
      method: "POST",
      data: {
        "contents": [{
          "parts": [{ "text": text }]
        }]
      }
    })
    setRes(response.data.candidates[0].content.parts[0].text);
    // console.log(response.data.candidates[0].content.parts[0].text);
  }
  // const ans= render(<Markdown>{res}</Markdown>, document.body)
  return (
    <>
      <div>
        <h1>ChatBot-AI</h1>
        {/* <Rendering prop={res}/> */}
        <div style={{}}><textarea disabled value={res} style={{ padding: "2px", width: "1200px", height: "600px", fontWeight: "500", fontSize: "1.35em", fontFamily: "fantasy", backgroundColor: "#242424", border: "0px" }}></textarea></div>
        <input style={{ padding: '0px', width: "700px", height: "70px", fontWeight: "300", fontSize: "1em", fontFamily: "fantasy", resize: "vertical" }} type="text" onChange={(e) => { setText(e.target.value) }} />
        <button onClick={answerGenerator}><h3>Get Response</h3></button>
      </div>
    </>
  )
}

// function Rendering(prop){
//   {<div>render(<Markdown>{prop.res}</Markdown>, document.body)</div>}
// }

export default App
