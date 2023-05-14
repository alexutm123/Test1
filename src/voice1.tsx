import React, { useEffect } from 'react';

function App11() {
  useEffect(() => {
    const enableMicrophone = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log('Microphone access granted:', stream);
      } catch (error) {
        console.error('Microphone access denied:', error);
      }
    };

    enableMicrophone();
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App11;
