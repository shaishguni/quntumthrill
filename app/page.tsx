'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-8 flex flex-col items-center bg-gray-100 rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`mb-2 p-2 rounded ${
              m.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'
            }`}
          >
            <span className={`text-${m.role === 'user' ? 'blue' : 'gray'}-800 font-bold`}>
              {m.role === 'user' ? 'You: ' : 'AI: '}
            </span>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="w-full flex items-center">
        <input
          className="flex-1 border rounded p-2 mr-2 focus:outline-none focus:border-blue-500"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}
