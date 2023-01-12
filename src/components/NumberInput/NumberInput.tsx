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

const NumericInput = ({
  icon,
  min,
  precision,
  step,
  value,
  setValue
}: {
  icon: any
  min: number
  precision: number
  step: number
  value?: number | undefined
  setValue?: any
}) => {
  return (
    <InputGroup size='lg' w='100%'>
      <InputLeftAddon>
        <Icon as={icon} />
      </InputLeftAddon>
      <NumberInput
        value={value}
        onChange={setValue}
        w='100%'
        min={min}
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
