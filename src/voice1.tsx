import React, { useState } from 'react';

function App11() {
  const [stream, setStream] = useState<MediaStream | null>(null);

  const handleMicAccess = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(prevState => mediaStream);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  return (
    <div>
      <button onClick={handleMicAccess}>Allow Microphone Access</button>
      {stream ? 'Microphone is accessible' : 'Please allow microphone permission for this app to work properly.'}
    </div>
  );
}

export default App11;
