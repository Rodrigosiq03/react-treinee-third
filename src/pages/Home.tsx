/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { Button, Container, LogoutButton, TableContainer } from "../components/pages/Home/styles"
import { useNavigate } from "react-router-dom"
import { CepMaskedInput } from "../components/pages/Home"
import { useCep } from "../hooks/use_cep"
import { Table, TableBody, TableRow, TableHead, TableCell } from "@mui/material"

export const Home: React.FC = () => {
  const navigate = useNavigate()
  const { getInfoByCEP, infos, setInfos } = useCep()

  const [cep, setCep] = useState('')

  async function handleFindCEP() {
    const data = await getInfoByCEP(cep)
    const info = {
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf
    }

    setInfos([...infos, info])

    console.log(data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/')
    }
  }, [navigate])

  return <Container initial={{ scale: 0 }} transition={{ type: "tween", duration: 1.5 }} animate={{ scale: 1, rotate: 360 }}>
    <h1>Home</h1>
    <h3>Pesquisar minha rua</h3>
    <CepMaskedInput onChange={(e: any) => setCep(e.target.value)} mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]} placeholderChar={'\u2000'} showMask />
    <Button onClick={handleFindCEP}>Pesquisar</Button>

    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>CEP</TableCell>
            <TableCell>Logradouro</TableCell>
            <TableCell>Bairro</TableCell>
            <TableCell>Localidade</TableCell>
            <TableCell>UF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {infos.map((info, index) => (
            <TableRow key={index}>
              <td>{info.cep}</td>
              <td>{info.logradouro}</td>
              <td>{info.bairro}</td>
              <td>{info.localidade}</td>
              <td>{info.uf}</td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <LogoutButton onClick={() => {
      localStorage.removeItem('token')
      navigate('/')
    } }>Sair</LogoutButton>
  </Container>

}