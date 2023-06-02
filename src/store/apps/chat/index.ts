// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Types
import { Dispatch } from 'redux'
import { SendMsgParamsType } from 'src/types/apps/chat'

import { ChatsObj } from 'src/types/apps/chat'

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)

const data: { chats: ChatsObj[] } = {
  chats: [
    {
      id: '1',
      title: 'test',
      chat: [
        {
          message: "How can we help? We're here for you!",
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: '11'
        },
        {
          message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
          time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
          senderId: '6478b37ead83b5bb7b3cd947'
        },
        {
          message: 'It should be MUI v5 compatible.',
          time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
          senderId: '6478b37ead83b5bb7b3cd947'
        },
        {
          message: 'Absolutely!',
          time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
          senderId: '11'
        },
        {
          message: 'This admin template is built with MUI!',
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          senderId: '11'
        },
        {
          message: 'Looks clean and fresh UI. 😍',
          time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
          senderId: '6478b37ead83b5bb7b3cd947'
        },
        {
          message: "It's perfect for my next project.",
          time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
          senderId: '6478b37ead83b5bb7b3cd947'
        },
        {
          message: 'How can I purchase it?',
          time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
          senderId: '6478b37ead83b5bb7b3cd947'
        },
        {
          message: 'Thanks, From our official site  😇',
          time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
          senderId: '11'
        },
        {
          message: 'I will purchase it for sure. 👍',
          time: previousDay,
          senderId: '6478b37ead83b5bb7b3cd947'
        }
      ]
    }
  ]
}

const newChat: ChatsObj = {
  id: null,
  title: 'new chat',
  chat: []
}

// ** Fetch Chats & Contacts
export const fetchChatsContacts = createAsyncThunk('appChat/fetchChatsContacts', async () => {
  const chatsContacts = data.chats.map((chat: ChatsObj) => {
    const newChat: ChatsObj = { ...chat, lastMessage: chat.chat[chat.chat.length - 1], chat: [] }

    return newChat
  })

  return { chats: chatsContacts }
})

// ** Select Chat
export const selectChat = createAsyncThunk(
  'appChat/selectChat',
  async (id: number | string, { dispatch }: { dispatch: Dispatch<any> }) => {
    console.log('id', id)

    const chat = data.chats.find((c: ChatsObj) => c.id === id)

    // @ts-ignore
    // if (contact.chat) contact.chat.unseenMsgs = 0

    await dispatch(fetchChatsContacts())
    console.log('contact', { chat })

    return chat
  }
)
const reorderChats = (arr: ChatsObj[], from: number, to: number) => {
  const item = arr.splice(from, 1)

  // ** Move the item to its new position
  arr.splice(to, 0, item[0])
}

// ** Send Msg
export const sendMsg = createAsyncThunk('appChat/sendMsg', async (obj: SendMsgParamsType, { dispatch }) => {
  let activeChat = data.chats.find((chat: ChatsObj) => chat.id === obj.contact?.id)

  const newMessageData = {
    senderId: 11,
    time: new Date(),
    message: obj.message,
    feedback: {
      isSent: true,
      isSeen: false,
      isDelivered: false
    }
  }

  // If there's new chat for user create one
  let isNewChat = false

  if (activeChat === undefined) {
    isNewChat = true

    data.chats.push({
      id: obj.contact?.id,
      userId: obj.contact?.id,
      unseenMsgs: 0,
      chat: [newMessageData]
    })
    activeChat = data.chats[data.chats.length - 1]
  } else {
    activeChat.chat.push(newMessageData)
  }
  const response = { newMessageData, id: obj.contact?.id }

  // @ts-ignore
  if (isNewChat) response.chat = activeChat

  reorderChats(
    data.chats,
    data.chats.findIndex(i => i.id === response.id),
    0
  )
  if (obj.contact) {
    await dispatch(selectChat(obj.contact.id))
  }
  await dispatch(fetchChatsContacts())

  return { response }
})

export const appChatSlice = createSlice({
  name: 'appChat',
  initialState: {
    chats: null,
    contacts: null,
    selectedChat: null
  },
  reducers: {
    removeSelectedChat: state => {
      state.selectedChat = null
    },
    addNewChat: state => {
      state.chats.push(newChat)
      state.selectedChat = newChat
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchChatsContacts.fulfilled, (state, action) => {
      state.chats = action.payload.chats
    })
    builder.addCase(selectChat.fulfilled, (state, action) => {
      console.log('action.payload', action.payload)

      state.selectedChat = action.payload
    })
  }
})

export const { removeSelectedChat, addNewChat } = appChatSlice.actions

export default appChatSlice.reducer
