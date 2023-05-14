import React, { useState } from 'react';

function App11() {
  const [stream, setStream] = useState(null);

  const handleStartRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(mediaStream);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStopRecording = () => {
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  return (
    <div>
      {!stream ? (
        <button onClick={handleStartRecording}>Разрешить доступ к микрофону</button>
      ) : (
        <button onClick={handleStopRecording}>Остановить запись</button>
      )}
    </div>
  );
}

export default App11;
