import { useContext } from "react"
import { CepContext, CepContextType } from "../contexts/cep_context"

export const useCep = (): CepContextType => {
  const cepContext = useContext(CepContext)

  if (!cepContext) {
    throw new Error('useCep must be used within an CepProvider')
  }

  return cepContext
}