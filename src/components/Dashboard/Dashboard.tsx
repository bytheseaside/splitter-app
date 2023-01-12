import { Flex, StackDivider, Stack, Button } from '@chakra-ui/react'
import { DollarOutlined, UserOutlined, RedoOutlined } from '@ant-design/icons'
import NumericInput from '../NumberInput/NumberInput'
import { useState } from 'react'
import Header from '../Header/Header'
import TipSlider from '../TipSlider/TipSlider'
import CalculatedItem from '../CalculatedItem/CalculatedItem'

const Dashboard = () => {
  const [billAmount, setBillAmount] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(12)
  const [numOfPeople, setNumOfPeople] = useState(0)

  return (
    <Flex
      direction='column'
      align='center'
      minW='70%'
      minH='80vh'
      justify='space-evenly'
      justifySelf='center'
      alignSelf='center'
    >
      <Header />
      <Stack
        direction={['column', 'column', 'row']}
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        justify={['center', 'center', 'space-evenly']}
        minW='70%'
        maxW={['90%', '90%', '85%']}
      >
        <Stack
          direction={'column'}
          spacing={4}
          w='100%'
          align='stretch'
          justify='space-between'
        >
          {/* BILL AMOUNT INPUT */}
          <NumericInput
            icon={DollarOutlined}
            min={0}
            precision={2}
            step={5}
            value={billAmount}
            setValue={setBillAmount}
          />
          {/* SLIDER FOR TIP PERCENTAGE */}
          <TipSlider
            sliderValue={tipPercentage}
            setSliderValue={setTipPercentage}
          />
          {/* NUMBER OF PEOPLE TO SPLIT THE BILL ON */}
          <NumericInput
            icon={UserOutlined}
            min={0}
            precision={0}
            step={1}
            value={numOfPeople}
            setValue={setNumOfPeople}
          />
        </Stack>
        <Stack
          direction='column'
          spacing={4}
          px={2}
          py={4}
          borderRadius='md'
          w='100%'
          bg='teal.400'
          align='stretch'
          justify='space-between'
        >
          <CalculatedItem
            value={
              numOfPeople
                ? Number(
                    (
                      (billAmount * tipPercentage) /
                      (100 * numOfPeople)
                    ).toFixed(2)
                  )
                : 0
            }
            description='Tip amount'
          />
          <CalculatedItem
            value={
              numOfPeople
                ? Number(
                    (
                      (billAmount * (100 + tipPercentage)) /
                      (100 * numOfPeople)
                    ).toFixed(2)
                  )
                : 0
            }
            description='Total amount'
          />
          <Button
            leftIcon={<RedoOutlined />}
            colorScheme='teal'
            width='100%'
            size={{
              base: 'sm',
              md: 'md',
              lg: 'lg'
            }}
            onClick={() => {
              setBillAmount(0)
              setNumOfPeople(0)
              setTipPercentage(12)
            }}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Dashboard
