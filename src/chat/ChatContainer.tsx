import React from 'react';
import './Chat.css';
import { IMessageProps, Message } from '../message/Message';


export interface IMessagesCollection {
  collection: Omit<IMessageProps, 'currentUserName'>[];
  currentUserName: string; //Pick<IMessageProps, 'currentUserName'>;
}

export const Chat: React.FC<IMessagesCollection> = ({collection, currentUserName}) => {
  // const currentUser = 'User1';

  // const messages : Omit<IMessageProps, 'currentUserName'>[] = [
  //   {
  //     authorName: 'User1',
  //     text: 'Hello World!',
  //     date: new Date(),
  //     keyId: 1,
  //   },
  //   {
  //     authorName: 'User2',
  //     text: 'Hi there!',
  //     date: new Date(),
  //     keyId: 2,
  //   },
  // ];

  return (
    <div className="chat-container">
      {collection.map((message) => (
        <Message {...message} currentUserName={currentUserName} />
      ))}
    </div>
  );
};
