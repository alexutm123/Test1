import React, { useState, useRef } from "react";

const App11 = () => {
  const [recording, setRecording] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(stream);
      if (audioRef.current) {
        audioRef.current.srcObject = stream;
        audioRef.current.play();
      }
      setRecording(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setRecording(false);
    }
  };

  return (
    <div>
      <button onClick={startRecording}>Start recording</button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop recording
      </button>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default App11;
