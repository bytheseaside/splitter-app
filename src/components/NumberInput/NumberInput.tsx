import {
  InputGroup,
  InputLeftAddon,
  Icon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'
import { useState } from 'react'

const NumericInput = ({
  icon,
  min,
  max,
  precision,
  step
}: {
  icon: any
  min: number
  max: number
  precision: number
  step: number
}) => {
  const [billAmount, setBillAmount] = useState(0)
  const [numOfPeople, setNumOfPeople] = useState(0)

  return (
    <InputGroup size='lg' w='100%'>
      <InputLeftAddon>
        <Icon as={icon} />
      </InputLeftAddon>
      <NumberInput
        w='100%'
        min={min}
        max={max}
        precision={precision ?? 0}
        step={step}
      >
        <NumberInputField borderLeftRadius={0} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </InputGroup>
  )
}

export default NumericInput
