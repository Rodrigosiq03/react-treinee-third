import axios from 'axios'

export const httpNotemaua = axios.create({
  baseURL: import.meta.env.VITE_NOTEMAUA_API_URL,
})

export const httpViaCep = axios.create({
  baseURL: import.meta.env.VITE_VIA_CEP_API_URL,
})