import React from 'react';
import './Message.css';

export interface IMessageProps {
  authorName: string;
  text: string;
  date: Date;
  keyId: number | string;
  currentUserName: string; //todo: переделать на id & add authorId
}

export const Message: React.FC<IMessageProps> = ({ authorName, text, date, keyId, currentUserName }) => {
  const isCurrentUser = authorName === currentUserName;
  return (
    <div className={`message-container ${isCurrentUser ? 'current-user' : ''}`} key={keyId}>
      {!isCurrentUser && (
        <div className="message-header">
          <span className="author-name">{authorName}</span>
          <span className="date">{date.toLocaleString()}</span>
        </div>
      )}
      <div className="message-body">{text}</div>
      {isCurrentUser && <div className="date current-date">{date.toLocaleString()}</div>}
    </div>
  );
};
