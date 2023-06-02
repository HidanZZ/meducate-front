// ** Types
import { Dispatch } from 'redux'

export type ChatType = {
  message: string
  senderId: string
  time: Date | string
}

export type ChatsObj = {
  id: string | null
  chat: ChatType[]
  lastMessage?: ChatType
  title: string
}

export type SelectedChatType = null | ChatsObj

export type ChatStoreType = {
  chats: ChatsObj[] | null
  selectedChat: ChatsObj | null
}

export type SendMsgParamsType = {
  chat?: ChatsObj
  message: string
  contact?: ChatsObj
}

export type ChatContentType = {
  hidden: boolean
  mdAbove: boolean
  store: ChatStoreType
  sidebarWidth: number
  dispatch: Dispatch<any>
  handleLeftSidebarToggle: () => void
  getInitials: (val: string) => string
  sendMsg: (params: SendMsgParamsType) => void
  handleUserProfileRightSidebarToggle: () => void
}

export type ChatSidebarLeftType = {
  hidden: boolean
  mdAbove: boolean
  store: ChatStoreType
  sidebarWidth: number
  dispatch: Dispatch<any>
  leftSidebarOpen: boolean
  userProfileLeftOpen: boolean
  removeSelectedChat: () => void
  selectChat: (id: string) => void
  handleLeftSidebarToggle: () => void
  getInitials: (val: string) => string
  handleUserProfileLeftSidebarToggle: () => void
  formatDateToMonthShort: (value: string, toTimeForCurrentDay: boolean) => void
}

export type SendMsgComponentType = {
  store: ChatStoreType
  dispatch: Dispatch<any>
  sendMsg: (params: SendMsgParamsType) => void
}

export type ChatLogType = {
  hidden: boolean
  chat: ChatsObj
}

export type MessageType = {
  time: string | Date
  message: string
  senderId: string
}

export type ChatLogChatType = {
  msg: string
  time: string | Date
}

export type FormattedChatsType = {
  senderId: string
  messages: ChatLogChatType[]
}

export type MessageGroupType = {
  senderId: string
  messages: ChatLogChatType[]
}
