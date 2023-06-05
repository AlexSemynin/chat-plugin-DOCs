import React from 'react';
import './Chat.css';
import { IMessageProps, Message } from '../message/Message';


export interface IMessagesCollection {
  collection: ICollection;
  currentUserName: string; //Pick<IMessageProps, 'currentUserName'>;
}

export type ICollection = Omit<IMessageProps, 'currentUserName'>[];

export const Chat: React.FC<IMessagesCollection> = ({collection, currentUserName}) => {

  return (
    <div className="chat-container">
      {collection.map((message) => (
        <Message {...message} currentUserName={currentUserName} />
      ))}
    </div>
  );
};
