import { HStack, VStack } from '@chakra-ui/react'

export const Landing = () => {
  return (
      <VStack h={"100vh"} w={"100vw"} bgColor={'red.200'}>
          <HStack>
              <VStack></VStack>
              <VStack></VStack>
          </HStack>
          <HStack>
              <VStack></VStack>
              <VStack></VStack>
              <VStack></VStack>
          </HStack>
    </VStack>
  )
}
