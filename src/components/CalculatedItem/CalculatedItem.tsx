import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react'

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
      borderRadius={['xs', 'sm', 'md', 'lg']}
      color={useColorModeValue('teal.700', '')}
    >
      <Stack direction='column' justify='center'>
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
            textAlign: 'left'
          }}
        >
          /per person
        </Text>
      </Stack>
      <Text fontSize={['lg', 'xl', '2xl', '3xl']}>${value}</Text>
    </Flex>
  )
}

export default CalculatedItem
