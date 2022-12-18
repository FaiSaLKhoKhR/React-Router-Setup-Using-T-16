// rfc
// import React from 'react'
// import Navbar from './Navbar';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function TextForm(props) {
// text = "new text";    ------->   Wrong way to change the state
// setText("new text");  ------->   Correct way to change the state

                    // (State)
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        console.log("Upercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upercase!", "success")
        // setText("You have Clicked on handleUpClick")
    }

    const handletolow = ()=>{
      // console.log('Clicked fired' + text);
     let newTest = text.toLowerCase();
     setText(newTest);
     props.showAlert("Converted to Lowercase!", "success")
    }

    const handletospacesclear = () => {
     let newTest = text.split(/[ ]+/);
     setText(newTest.join(" "));
     props.showAlert("Removed extra spaces!", "success")

    }

    const handlecopy = ()=>{
      let text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
     props.showAlert("Copy to Clipboard!", "success")

    }

    
    const handletoclear = ()=>{
     let newTest = '';
     setText(newTest);
     props.showAlert("Text Cleared!", "success")
    }

// -----------------------------------------------------------------------------------------------------------------------

    const handleOnChange = (event)=>{
        console.log("On Changed")
        setText(event.target.value)
    }

    //------------------------------------------
        const navigate = useNavigate();
    //------------------------------------------

  return (
    
    <>
    {/* <Navbar title="SparkSolution" aboutText="About-SparkSolution"/> */}

<div className='container' style={{color: props.mode==='dark'?'white':'#042743'}&&
                                  {color: props.red==='dark'?'white':'#851414'}}>
  <h2 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
  <div className="mb-3">
<textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="5"
style={{backgroundColor: props.mode==='dark'?'#042743':'white' && props.red==='dark'?'#851414':'white',
color: props.mode==='dark'?'white':'black'}}></textarea>
  </div>
<button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Upercase</button>
<button className="btn btn-success mx-1" onClick={handletolow}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1" onClick={handletoclear}>Clear Text</button>
<button className="btn btn-secondary mx-1" onClick={handletospacesclear}>Clear Extra Spaces</button>
<button className="btn btn-info mx-1" onClick={handlecopy}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      <p>{text.replace(/[ ]+/,'').trim()===''?0:text.replace(/[ ]+/g,' ').trim().split(' ').length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p className='border'>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
    </div>

{/* --------------------------------------------------------------------------- */}
    <button className="btn btn-secondary ms-3" onClick={()=>{navigate('/about')}}>Navigate to About</button>
{/* --------------------------------------------------------------------------- */}

    </>
  )
}
