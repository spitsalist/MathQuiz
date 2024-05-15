import React from 'react';
import MathQuiz from './MathQuiz';

function App() {
  return (
    <div style={appStyle}>
      <MathQuiz />
    </div>
  );
}

const appStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#ccc'
};

export default App;
