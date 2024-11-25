import React, { useState, useEffect } from 'react';

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [response, setResponse] = useState<string>('Thinking...');

  useEffect(() => {
    const fetchAnswer = async () => {
      try {
        const response = await fetch('http://localhost:8000/ask-query', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: message }),
        });

        const data = await response.json();
        setResponse(data.reply || 'No answer received');
      } catch (error) {
        console.error('Error fetching response:', error);
        setResponse('There is an error, please try again.');
      }
    };

    fetchAnswer();
  }, [message]);

  return (
    <div className="bg-slate-800 text-white p-4 rounded-lg my-2">
      <p className="font-semibold">User:</p>
      <p className="mb-2">{message}</p>
      <p className="font-semibold">BuraChatAI:</p>
      <p>{response}</p>
    </div>
  );
};

export default Message;
