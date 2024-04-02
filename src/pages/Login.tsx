import { useNavigate } from "react-router-dom"
import { Button, Container, Input } from "../components/pages/Login/styles"
import { useAuth } from "../hooks/use_auth"
import { useEffect, useState } from "react"


export const Login: React.FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleLogin() {
    console.log(email, password)

    const token = await login(email, password)

    console.log(token)

    if (token) {
      localStorage.setItem('token', token)
      navigate('/home')
    }

  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      navigate('/home')
    }
  }, [navigate])

  return <Container animate={{ scale: 1 }} transition={{ type: "tween", duration: 1.5 }} initial={{ scale: 0 }}>
    <h1 style={{ marginBottom: '4%' }}>Login</h1>
    <Input onChange={(e) => setEmail(e.target.value)} type="text" label="Email"/>
    <Input onChange={(e) => setPassword(e.target.value)} type="password" label="Password"/>
    <Button onClick={handleLogin}>Entrar</Button>
  </Container>
}