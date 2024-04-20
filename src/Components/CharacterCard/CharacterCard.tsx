import { HStack, Image, Text, VStack } from '@chakra-ui/react'

export const CharacterCard = ({ image, name, status, id, specie, handleSelectCharacter }: { 
    image: string,
    name: string,
    status: string,
    specie: string,
    id:string,
    handleSelectCharacter: (id: string, name: string) => void
}) => {
  return (
      <HStack onClick={()=>handleSelectCharacter(id,name)}>
          <Image h={10} w={10} src={image} alt={name}/>
          <VStack>
              <Text>{name}</Text>
              <Text>{status} - {specie}</Text>
          </VStack>
    </HStack>
  )
}
