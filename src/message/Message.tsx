import React from 'react';

import DOMPurify from 'dompurify';

import './Message.css';

export interface IMessageProps {
  authorName: string;
  text: string;
  date: Date;
  keyId: number | string;
  currentUserName: string; //todo: переделать на id & add authorId
  nextUserName?: string;
}

export const Message: React.FC<IMessageProps> = ({ authorName, text, date, keyId, currentUserName, nextUserName }) => {
  const isCurrentUser = authorName === currentUserName;
  const isSameUser = nextUserName === authorName;
  const sanitizedText = DOMPurify.sanitize(text, { FORBID_TAGS: ['script'] });

  return (
    <div className={`message-container ${isCurrentUser ? 'current-user' : ''} ${isSameUser ? 'same-user': ''}`} key={keyId}>
      {!isCurrentUser && (
        <div className="message-header">
          <span className="author-name">{authorName}</span>
          <span className="date">{date.toLocaleString()}</span>
        </div>
      )}
      <div className="message-body" dangerouslySetInnerHTML={{ __html: sanitizedText }}></div>
      {isCurrentUser && <div className="date current-date">{date.toLocaleString()}</div>}
    </div>
  );
};
