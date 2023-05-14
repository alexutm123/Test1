import React, { useState, useEffect } from 'react';

function App11() {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const getMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setStream(stream);
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };

    getMediaStream();
  }, []);

  return (
    <div>
      {stream ? 'Microphone is accessible' : 'Please allow microphone permission for this app to work properly.'}
    </div>
  );
}

export default App11;
