import React, { useState, useEffect } from 'react';
import Answer from './Answer';

function MathQuiz() {
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);

  useEffect(() => {
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  }, [score]);

  const updatePoints = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div style={quizStyle}>
      <h1>Math Quiz</h1>
      <p>What is {a} + {b}?</p>
      <p>Score: {score}</p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const quizStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  margin: '0 auto'
};

export default MathQuiz;
