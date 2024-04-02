import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';
import TextMaskInput from 'react-text-mask';
import { styled as styledMUI, TableContainer as TableContainerMUI, TableBody, TableCell, TableHead } from '@mui/material';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Input = styled(TextMaskInput)`
  margin-top: 20px;
  border: 2px solid #f2f;
  width: 50%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${shade(0.2, '#f2f')};
  }
  font-size: 20px;
  text-align: center;
`

export const Button = styled.button`
  background-color: #f2f;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: white;
  &:hover {
    background-color: ${shade(0.2, '#f2f')};
  }
  margin-top: 20px;
`;

export const TableContainer = styled(TableContainerMUI)({
  padding: 0,
  marginTop: 20,
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  border: '2px solid #f2f',
})

export const LogoutButton = styled.button`
  background-color: #f2f;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: white;
  &:hover {
    background-color: ${shade(0.2, '#f2f')};
  }
  margin-top: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
`;