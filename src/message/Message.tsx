import React from 'react';

import DOMPurify from 'dompurify';

import './Message.css';
import { tryGetDisplayedDate } from './MessageHelper';

export interface IMessageProps {
  authorName: string;
  text: string;
  date: Date;
  keyId: number | string;
  currentUserName: string; //todo: переделать на id & add authorId
  nextUserName?: string;
  nextMessageDate?: Date;
}

export const Message: React.FC<IMessageProps> = ({ authorName, text, date, keyId, currentUserName, nextUserName, nextMessageDate }) => {
  const isCurrentUser = authorName === currentUserName;
  const isSameUser = nextUserName === authorName;
  const sanitizedText = DOMPurify.sanitize(text, { FORBID_TAGS: ['script'] });
  const out = { displayedDate: null };
  debugger;
  const isDispalyedDate = tryGetDisplayedDate(date, nextMessageDate, out);
  return (
    <div
      key={keyId}
      className={`
        message-container 
        ${isCurrentUser ? 'current-user' : ''} 
        ${isSameUser ? 'same-user' : ''} 
        ${isDispalyedDate ? 'display-date' : ''}`}
      data-date={`${isDispalyedDate ? out.displayedDate : ''}`}
    >
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
