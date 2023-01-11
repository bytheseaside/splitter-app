import { Heading, Stack, Icon } from '@chakra-ui/react'
import { ExpandAltOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <Stack align='center' justify='center' direction={['column', 'column', 'row']} spacing={4}>
      <Heading as='h2' size='2xl'>
        SPli
      </Heading>
      <Icon fontSize='4xl' as={ExpandAltOutlined}></Icon>
      <Heading as='h2' size='2xl'>
        TTeR
      </Heading>
    </Stack>
  )
}

export default Header
