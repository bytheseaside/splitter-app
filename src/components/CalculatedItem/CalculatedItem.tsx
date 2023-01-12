import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

const CalculatedItem = ({
  description,
  value
}: {
  description: string
  value: number
}) => {
  return (
    <Flex
      w='100%'
      justify='space-between'
      align='center'
      px={4}
      my={3}
      borderRadius={['xs', 'sm', 'md', 'lg']}
      color={useColorModeValue('teal.700', '')}
    >
      <Flex direction='column' justify='center'>
        <Text
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            textAlign: 'left'
          }}
        >
          {description}
        </Text>
        <Text
          sx={{
            fontSize: '0.8rem',
            textAlign: 'left',
            color: 'white'
          }}
        >
          /per person
        </Text>
      </Flex>
      <Text fontSize={['lg', 'xl', '2xl', '3xl']}>${value}</Text>
    </Flex>
  )
}

export default CalculatedItem
