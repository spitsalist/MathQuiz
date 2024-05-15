import React, { useState } from 'react';

function Answer({ a, b, updatePoints }) {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = a + b;
    updatePoints(parseInt(userAnswer) === correctAnswer);
    setUserAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginTop: '20px'
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  cursor: 'pointer'
};

export default Answer;
