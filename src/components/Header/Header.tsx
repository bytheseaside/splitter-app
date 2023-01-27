import { Heading, Stack, Icon, keyframes } from '@chakra-ui/react'
import { ExpandAltOutlined } from '@ant-design/icons'

const Header = () => {
  const splitHorizontally = keyframes`
  0% { width: auto; }
  50% { width: 80%; }
  100% { width: auto; }
`
  const splitVertically = keyframes`
  from { height: 100%; }
  to { height: 130%; }
`
  return (
    <Stack
      align='center'
      justify={['center', 'center', 'space-between']}
      direction={['column', 'column', 'row']}
      spacing={4}
      mb={4}
      sx={{
        transition: 'all 0.35s ease-in-out',
        '&:hover': {
          animation: [
            `${splitVertically} `,
            `${splitVertically}`,
            `${splitHorizontally}`
          ],
          textTransform: 'uppercase'
        }
      }}
    >
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
