import { createContext, useReducer } from 'react'
import Gun from 'gun'

const gun = Gun(['https://discord-gun-node.herokuapp.com/gun'])

type GunContextProps = {
  gun: any
  getMessages: any
  state: any
}

export const GunContext = createContext<GunContextProps>({})

const initialState = { messages: [] }

const reducer = (state: any, action: any) => {
  try {
    if (action.type == 'clear') return { messages: [] }
    if (action.type == 'add') {
      return { messages: [...state.messages, action.data] }
    }
  } catch (error) {
    console.error(error)
  }
}

export const GunProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getMessages = (_name: any) => {
    const messagesRef: any = gun.get(_name)

    messagesRef.map().once((message: any) => {
      dispatch({
        type: 'add',
        data: {
          sender: message.sender,
          content: message.content,
          avatar: message.avatar,
          createdAt: message.createdAt,
          messageId: message.messageId,
          isBullish: message.isBullish,
        },
      })
    })
  }

  return (
    <GunContext.Provider
      value={{
        gun,
        getMessages,
        state,
      }}
    >
      {children}
    </GunContext.Provider>
  )
}
