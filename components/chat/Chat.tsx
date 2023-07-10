import React, { useState } from 'react';
import { IMessage } from '@common/types/messages';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import _ from 'lodash';

function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [currentUser, setCurrentUser] = useState('User1');
  const handleSend = () => {
    // append the new message to the current list of messages
    setMessages((messages) => [
      ...messages,
      { user: currentUser, message: messageInput, timestamp: new Date() },
    ]);
    // clear the input field
    setMessageInput('');
  };
  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUser(event.target.value);
  };
  const [label, setLab] = useState('Standart');
  return (
    <div className="pl-4 h-full">
      <div className="relative right-2 ">
        <input
          type="text"
          className="p-2.5 focus:outline-none focus:ring-0 focus:border-inherit border-inherit w-full text-sm text-gray-900 outline-none appearance-none bg-gray-50 rounded-lg border-[2px] border-gray-900"
          placeholder="Message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button
          className="absolute top-0 appearance-none right-0 border-inherit outline-none p-2.5 text-sm font-medium text-black"
          onClick={() => {
            if (messageInput) handleSend();
          }}
        >
          <PaperAirplaneIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
