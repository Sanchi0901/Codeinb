export const saveAnswer = (sessionId, questionId, answer) => {
    const surveyData = JSON.parse(localStorage.getItem(sessionId)) || {};
    surveyData[questionId] = answer;
    localStorage.setItem(sessionId, JSON.stringify(surveyData));
  };
  
  export const generateSessionId = () => {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${new Date().getTime()}`;
      localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };
  
  export const saveCompletionStatus = (sessionId) => {
    const surveyData = JSON.parse(localStorage.getItem(sessionId)) || {};
    surveyData['status'] = 'COMPLETED';
    localStorage.setItem(sessionId, JSON.stringify(surveyData));
  };
  