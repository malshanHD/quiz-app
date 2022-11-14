import { useState } from "react";
import QuestionList from '../Data/questions.json'
import QuizsResult from './QuizResult';
import Question from './Question';

function QuizScreen({retry}){
    const [currentQuestionIndex, setCurrentQuestionIndex] =useState(0);
    const [markedAnswers, setMarkedAnswers]= useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calculateResult(){
        let correct=0;
        QuestionList.forEach((question,index)=>{
            if(question.correctOptionIndex===markedAnswers[index]){
                correct++;
                console.log("marked");
            }
        });

        return {
            total:QuestionList.length,
            correct:correct,
            percentage:Math.trunc((correct / QuestionList.length)*100)
        };
    }

    return(
        <div className="quiz-screen">
            {
                isQuestionEnd ? (
                    <QuizsResult
                        result={calculateResult()}
                        retry={retry}
                    />
                ):(
                    <Question 
                    question={QuestionList[currentQuestionIndex]}
                    totalQuestions={QuestionList.length}
                    currentQuestion={currentQuestionIndex}
                    setAnswer={(index)=>{
                        setMarkedAnswers((arr)=>{
                            let newArr =[...arr];
                            newArr[currentQuestionIndex-1]=index;
                            return newArr;
                        });
                        setCurrentQuestionIndex(currentQuestionIndex+1);
                    }}
                    />
                )
            }
        </div>
    );
}

export default QuizScreen;