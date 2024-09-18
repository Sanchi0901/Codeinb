import React from 'react';

function Question({ question, onAnswer, answer }) {
  const handleCircleClick = (rating) => {
    onAnswer(question.id, rating);
  };

  return (
    <div className="question">
      <h3>{question.text}</h3>

      {question.type === 'rating' && question.max === 5 && (
        <div className="rating-circles">
          {[...Array(5).keys()].map(num => (
            <div
              key={num + 1}
              className={`rating-circle ${answer === num + 1 ? 'active' : ''}`}
              onClick={() => handleCircleClick(num + 1)}
            >
              {num + 1}
            </div>
          ))}
        </div>
      )}

       {/* Handle 1-10 rating question */}
       {question.type === 'rating' && question.max === 10 && (
        <div className="rating-circles rating-10">
          {[...Array(10).keys()].map(num => (
            <div
              key={num + 1}
              className={`rating-circle ${answer === num + 1 ? 'active' : ''}`}
              onClick={() => handleCircleClick(num + 1)}
            >
              {num + 1}
            </div>
          ))}
        </div>
      )}

      {question.type === 'text' && (
        <textarea
          value={answer || ''}
          onChange={(e) => onAnswer(question.id, e.target.value)}
          placeholder="Type your response here..."
        />
      )}
    </div>
  );
}

export default Question;

