// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextFrom2 from './components/TextFrom2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Goto from './components/Goto';
import GotoB from './components/GotoB';




function App() {

  const [mode, setMode] = useState("light"); //dark mode enabled or not.
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");

        // ---------------------T-15 Create DarkMode text in title page---------------------------- 
        
              //Title Update after 2 sec
      document.title = 'SparkSolution - DarkMode'
      setInterval(() => {
      document.title = 'SparkSolution is Amazing'
      }, 2000);
      setInterval(() => {
      document.title = 'Visit SparkSolution Now'
      }, 1500);
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
          // T-15 Create DarkMode text in title page 

      // document.title = 'SparkSolution - LightMode'
    }
  }

  const [red, setRed] = useState("light"); //Weather dark mode enabled or not.
  const toggleRed = () => {
    if(red === 'light'){
      setRed('dark');
      document.body.style.backgroundColor = '#851414';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setRed('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {    
      setAlert(null)
    }, 2000);
  }

  return (
<>
{/* Method(1) */}

<Router>

<Navbar title="SparkSolutionz" aboutText="About-Sparks" mode={mode} red={red} toggleMode={toggleMode} toggleRed={toggleRed} />
<Alert alert={alert}/>

{/* <Navbar title="SparkSolution" aboutText="About-SparkSolution" mode={mode} toggleMode={toggleMode} /> */}



<div className="container my-3">

<Routes>
    <Route exact path="/goto" element={<Goto/>}></Route>
    <Route exact path="/gotob" element={<GotoB/>}></Route>

    <Route exact path="/" element={<Login/>}></Route>
    <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter the text here to analyze TextForm below" 
    red={red} mode={mode} />} />
    <Route exact path="/about" element={<About/>}/>
</Routes>

</div>
       
{/* <hr className='border border-5 border-danger' /> */}
{/* <TextFrom2 heading="Enter the text here TextForm2 below"/> */}


</Router>
</>
  );
}
export default App;