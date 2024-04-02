import styled from 'styled-components';
import { styled as styledMUI, TextField } from '@mui/material';
import { shade } from 'polished';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Input = styledMUI(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '2px',
      borderColor: '#f2f',
      transition: 'border-color 0.2s',
    },
    '&:hover fieldset': {
      borderColor: shade(0.2, '#f2f'),
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E',
    },
  },
  width: '50%',
  marginBottom: 20
})

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