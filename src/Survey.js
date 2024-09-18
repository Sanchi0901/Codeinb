import React from 'react';
import Question from './Question';
import './index.css'; 

function Survey({ question, onAnswer, onNext, onPrev, onSkip, currentQuestionIndex, totalQuestions, onComplete }) {
  const handleFinishSurvey = () => {
    if (window.confirm('Are you sure you want to submit the survey?')) {
      onComplete();
    }
  };

  return (
    <div className="survey">
      <div className="question-header">
        <span>Question {currentQuestionIndex + 1} / {totalQuestions}</span>
      </div>
      <Question question={question} onAnswer={onAnswer} />
      <div className="navigation-buttons">
        {currentQuestionIndex > 0 && (
          <button onClick={onPrev}>Previous</button>
        )}
        <button onClick={onSkip}>Skip</button>
        {currentQuestionIndex < totalQuestions - 1 ? (
          <button onClick={onNext}>Next</button>
        ) : (
          <button onClick={handleFinishSurvey}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Survey;
