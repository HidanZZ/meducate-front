// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import ChatService from 'src/services/chat'
import { ChatObjWithoutMessages, SendMsgPayload } from 'src/types/apps/chat'

import { ChatsObj } from 'src/types/apps/chat'

const newChat: ChatsObj = {
  _id: null,
  title: 'new chat',
  messages: []
}

// ** Fetch Chats & Contacts
export const fetchChatsContacts = createAsyncThunk('appChat/fetchChatsContacts', async () => {
  try {
    const response = await ChatService.getChats()

    return { chats: response }
  } catch (err: any) {
    throw err
  }
})

// ** Select Chat
export const selectChat = createAsyncThunk('appChat/selectChat', async (id: string) => {
  try {
    const response = await ChatService.getChatById(id)

    return response
  } catch (err: any) {
    throw err
  }
})

// ** Send Msg
export const sendMsg = createAsyncThunk('appChat/sendMsg', async (obj: SendMsgPayload, { dispatch }) => {
  try {
    console.log('payload', obj)

    const response = await ChatService.sendMsg(obj).then(res => {
      dispatch(selectChat(res.id))
      dispatch(fetchChatsContacts())

      return res
    })

    return response
  } catch (err: any) {
    throw err
  }
})

const initialState: State = {
  chats: null,
  selectedChat: null
}

type State = {
  chats: ChatObjWithoutMessages[] | null
  selectedChat: ChatsObj | null
}

export const appChatSlice = createSlice({
  name: 'appChat',
  initialState: initialState,
  reducers: {
    removeSelectedChat: state => {
      state.selectedChat = null
    },
    addNewChat: state => {
      // state.chats.push(newChat)
      state.selectedChat = newChat
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchChatsContacts.fulfilled, (state, action) => {
      state.chats = action.payload.chats
    })
    builder.addCase(selectChat.fulfilled, (state, action) => {
      state.selectedChat = action.payload
    })
  }
})

export const { removeSelectedChat, addNewChat } = appChatSlice.actions

export default appChatSlice.reducer
