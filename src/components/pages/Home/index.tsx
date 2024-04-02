/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TextInputMask from 'react-text-mask'
import { Input } from './styles'

export const CepMaskedInput = (props: any) => {

  const { inputRef, ...other } = props
  return (
    // input mask for CEP (zip code)

    <Input  
      {...other}
      
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}