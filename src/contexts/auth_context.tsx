import React from "react"
import { PropsWithChildren, createContext } from "react"
import { httpNotemaua } from "../http/axios_instances"

/* eslint-disable @typescript-eslint/no-unused-vars */
export type AuthContextType = {
  login: (email: string, password: string) => Promise<string>
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void
}

const defaultAuthContext: AuthContextType = {
  login: async (email: string, password: string) => {
    return ''
  },

  isLogged: false,
  setIsLogged: (isLogged: boolean) => {},
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = React.useState(false)

  async function login(email: string, password: string) {
    console.log('chegou aq login context')
    const resp = await httpNotemaua.post('/login', {
      email,
      password
    })

    if (!resp.data.token) {
      alert('Usuário ou senha inválidos')
    }

    return resp.data.token
  }

  return <AuthContext.Provider value={{ login, isLogged, setIsLogged }}>
    {children}
  </AuthContext.Provider>

}