import React from 'react';
import './Chat.css';
import { IMessageProps, Message } from '../message/Message';


export interface IMessagesCollection {
  collection: IMessageItem[];
  currentUserName: string; //Pick<IMessageProps, 'currentUserName'>;
}

export type IMessageItem = Omit<IMessageProps, 'currentUserName'>;

export const Chat: React.FC<IMessagesCollection> = ({collection, currentUserName}) => {

  return (
    <div className="chat-container">
      {collection.map((message) => (
        <Message {...message} currentUserName={currentUserName} />
      ))}
    </div>
  );
};
