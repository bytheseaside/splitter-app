import {
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark
} from '@chakra-ui/react'

const TipSlider = ({
  sliderValue,
  setSliderValue
}: {
  sliderValue: number
  setSliderValue: Function
}) => {
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm'
  }
  return (
    <Center py={3} px={2}>
      <Slider
        aria-label='tip-percentage-selector'
        step={1}
        min={0}
        max={100}
        value={sliderValue}
        onChange={(val) => setSliderValue(val)}
        my={7}
        colorScheme='teal'
      >
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='teal.400'
          color='white'
          fontSize='sm'
          mt='-10'
          ml='-5'
          px={1}
          minW='12'
          w='auto'
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  )
}

export default TipSlider
