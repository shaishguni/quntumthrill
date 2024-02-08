'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
      <div className="mx-auto  h-screen  overflow-hidden  w-full bg-gradient-to-r from-indigo-800 to-purple-700 text-white max-w-md p-8 rounded-lg shadow-lg">
      {/* Display chat messages */}
      <div className="space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex items-start space-x-4 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`bg-${m.role === 'user' ? 'blue' : 'green'}-500 text-white p-4 rounded-lg max-w-md`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      {/* Chat input form */}
      <form onSubmit={handleSubmit} className="mt-96 pt-24 flex  items-center">
        <input
          className="flex-1 border border-gray-300 rounded-l text-black p-4 focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-black py-4 px-8 rounded-r hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}
