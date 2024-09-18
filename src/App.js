import React, { useState } from 'react';
import Survey from './Survey';
import ThankYou from './ThankYou';

function App() {
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    { id: 1, text: 'How satisfied are you with our products?', type: 'rating', max: 5 },
    { id: 2, text: 'How fair are the prices compared to similar retailers?', type: 'rating', max: 5 },
    { id: 3, text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', max: 5 },
    { id: 4, text: 'On a scale of 1-10, how would you recommend us to your friends and family?', type: 'rating', max: 10 },
    { id: 5, text: 'What could we do to improve our service?', type: 'text' },
  ];

 

  const startSurvey = () => {
    setSurveyStarted(true);
  };

  const handleAnswer = (questionId, answer) => {
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkip = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleCompletion = () => {
    localStorage.setItem('surveyStatus', 'COMPLETED');
    
    setCompleted(true);
    setTimeout(() => {
      setSurveyStarted(false);
      setCompleted(false);
    }, 5000); //delay
  };

  return (
    <div className="App">
      {!surveyStarted && !completed && (
        <div className="welcome-screen">
          <h1>Welcome to Our Shop</h1>
          <button onClick={startSurvey}>Start Survey</button>
        </div>
      )}
      {surveyStarted && !completed && (
        <Survey
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrev={handlePrev}
          onSkip={handleSkip}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onComplete={handleCompletion}
        />
      )}
      {completed && <ThankYou />}
    </div>
  );
}

export default App;
