import { Fade, HStack, Image, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

export const CharacterCard = ({
  image,
  name,
  status,
  id,
  specie,
  isSelected,
  handleSelectCharacter,
}: {
  image: string;
  name: string;
  status: string;
  specie: string;
  id: string;
  isSelected:boolean;
  handleSelectCharacter: (id: string, name: string) => void;
}) => {
  const { isOpen, onToggle } = useDisclosure()

  useEffect(()=>{
    onToggle();
  },[])

  const onClick = () =>{
    if(isSelected){
      handleSelectCharacter("","")
    } else {
      handleSelectCharacter(id, name)
    }
  }

  return (
    <Fade in={isOpen}>
    <HStack
      w="1/3"
      cursor="pointer"
      bgColor={isSelected ? "red.200" : "gray.600"}
      rounded="xl"
      onClick={onClick}
    >
      <Image h={32} w={32} src={image} alt={name} roundedLeft="xl" />
      <VStack justifyContent="flex-start" alignItems="flex-start">
        <Text noOfLines={1} color="white" fontSize="larger" fontWeight="semibold">{name}</Text>
        <Text color="gray.400" fontSize="small">
          {status} - {specie}
        </Text>
      </VStack>
    </HStack>
    </Fade>
  );
};
