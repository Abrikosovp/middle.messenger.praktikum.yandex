import Store, {TStore} from "./Store";
import {MessageResponse} from "../../utils/types/types";
import {ChatUser} from "../../pages/chat/type";

const getUser = (): TStore['user'] => {
  return Store.getState().user;
};

const setUser = (payload: TStore['user']): void => {
  Store.set('user', payload);
  setErrorTextForm('');
};

const setChats = (payload: TStore['chats']): void => {
  Store.set('chats', payload);
}

const setUsersToChat = (payload: ChatUser[]): void => {
  Store.set('activeChat.users', payload);
};

const setMessageList = (payload: MessageResponse[]): void => {
  Store.set('activeChat.messageList', payload);
};

const getActiveChat = (): TStore['activeChat'] => {
  return Store.getState().activeChat;
};

const setNewMessage = (payload: MessageResponse): void => {
  const activeChat = Store.getState().activeChat;
  if (activeChat?.messageList) {
    setMessageList([payload, ...activeChat.messageList]);
  }
};

const setErrorTextForm = (payload: TStore['errorTextForm']): void => {
  Store.set('errorTextForm', payload);
};

const setActiveChat = (payload: TStore['activeChat']): void => {
  Store.set('activeChat', payload);
};


export {
  getUser,
  setUser,
  setChats,
  setActiveChat,
  getActiveChat,
  setMessageList,
  setNewMessage,
  setUsersToChat,
  setErrorTextForm
};
