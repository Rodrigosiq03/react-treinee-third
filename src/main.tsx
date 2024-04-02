import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './contexts/auth_context.tsx'
import { CepProvider } from './contexts/cep_context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <CepProvider>
        <App /> 
      </CepProvider>
    </AuthProvider>
  </React.StrictMode>,
)
