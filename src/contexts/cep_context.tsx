/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useState } from "react"

type CepInfo = {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

export type CepContextType = {
  getInfoByCEP: (cep: string) => Promise<any>
  infos: CepInfo[]
  setInfos: (infos: CepInfo[]) => void
}

const defaultCepContext: CepContextType = {
  getInfoByCEP: async (cep: string) => {
    return new Promise((resolve) => {
      resolve('info')
    })
  },
  infos: [],
  setInfos: (infos: CepInfo[]) => {}
}

export const CepContext = createContext<CepContextType>(defaultCepContext)

export const CepProvider = ({ children }: PropsWithChildren) => {
  const [infos, setInfos] = useState<CepInfo[]>([])

  async function getInfoByCEP(cep: string) {
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if (!resp.ok) {
      throw new Error('CEP não encontrado')
    }

    console.log(resp)

    const data = await resp.json()

    return data
  }

  return <CepContext.Provider value={{ getInfoByCEP, infos, setInfos }}>
    {children}
  </CepContext.Provider>

}