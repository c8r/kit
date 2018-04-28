import React from 'react'
import { Flex, Box, Container, Border, Text } from 'rebass'

export default () => (
  <Box bg='gray9' color='white'>
    <Container>
      <Border p={3}>
        <Flex>
          <Text>Company</Text>

          <Box>
            <Text>Privacy</Text>
            <Text>Terms</Text>
          </Box>
        </Flex>
      </Border>
    </Container>
  </Box>
)
