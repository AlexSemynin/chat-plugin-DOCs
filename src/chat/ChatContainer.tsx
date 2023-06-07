import React, { useEffect } from 'react';
import './Chat.css';
import { IMessageProps, Message } from '../message/Message';


export interface IMessagesCollection {
  collection: IMessageItem[];
  currentUserName: string; //Pick<IMessageProps, 'currentUserName'>;
  /**
   * когда контент загружен на странице
   * @param messagesCount колличество загруженных сообщений
   * @returns void
   */
  onContentReady?: (messagesCount: number) => void;
}

export type IMessageItem = Omit<IMessageProps, 'currentUserName' | 'nextUserName'>;

export const Chat: React.FC<IMessagesCollection> = ({ collection, currentUserName, onContentReady }) => {

  useEffect(() => {
    onContentReady && onContentReady(collection.length);
  }, [])

  return (
    <div className="chat-container">
      {
        collection.length === 0
        ?
        <span>Нет сообщений</span>
        : collection.map((message, index) => {
          return (<Message
            {...message}
            currentUserName={currentUserName}
            nextUserName={collection[index + 1]?.authorName}
            nextMessageDate={collection[index + 1]?.date}
            key={message.keyId}
          />)
        })
      }
    </div>
  );
};
