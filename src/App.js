import './App.css';
import { useState } from 'react';
import NavBar from "./Component/Navbar";
import JoinScreen from "./Component/JoinScreen";
import QuizScreen from "./Component/QuizScreen";

function App() {
  const [isQuizStarted, setIsQuizStarted]=useState(false);

  return (
    <div className="App">
      <NavBar/>
      <div className='quiz-container'>
        {
          isQuizStarted ? (
            <QuizScreen retry={()=>setIsQuizStarted(false)}/>
          ):
          (
            <JoinScreen start={()=>setIsQuizStarted(true)}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
