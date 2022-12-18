import React, {useState} from 'react'


export default function TextFrom2(props) {
const [text, setText] = useState("Enter text here");
const handletolow = ()=>{
  // console.log('Clicked fired' + text);
 let newTest = text.toLowerCase();
 setText(newTest);
}

const changeonlow = (event)=>{
  // console.log('value text change');
  setText(event.target.value);
}

  return (
    <>
    <div className='container'>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="Box" rows="5" onChange={changeonlow} value={text}></textarea>
      </div>
      <button className="btn btn-success" onClick={handletolow}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
