import {
  Badge,
  Fade,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { CharactersRaceIcons, CharactersStatusesIcons } from "../../Utils/constants";

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
  isSelected: boolean;
  handleSelectCharacter: (id: string, name: string) => void;
}) => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
  }, []);

  const onClick = () => {
    if (isSelected) {
      handleSelectCharacter("", "");
    } else {
      handleSelectCharacter(id, name);
    }
  };

  return (
    <Fade in={isOpen}>
      <HStack
        w="1/3"
        cursor="pointer"
        rounded="xl"
        bgColor={isSelected ? "gray.800" : "#1c1f25"}
        border='1px solid'
        borderColor={isSelected ? "gray.400" : "gray.600"}
        sx={{ boxShadow: isSelected ? 'none'  : "10px 10px 12px rgba(0,0,0,.2)"}}
        onClick={onClick}
      >
        <Image h={24} w={24} src={image} alt={name} roundedLeft="xl" />
        <VStack justifyContent="flex-start" alignItems="flex-start">
          <Text
            noOfLines={1}
            textDecoration={isSelected ? "underline" : "none"}
            color="white"
            fontSize="larger"
            fontWeight="semibold"
          >
            {name}
          </Text>
          <VStack gap={0} w='full' justifyContent='flex-start' alignItems='flex-start'>
            {/* <HStack alignItems='center' justifyContent='center' gap={1}> */}
            <Badge colorScheme={status === "Alive" ? "green" : "red"} rounded='md' variant='solid' display='flex' alignItems='center' gap={1}>
              {status}
            {
              CharactersStatusesIcons[
                status as keyof typeof CharactersStatusesIcons
              ]
            }
            </Badge>
          {/* </HStack> */}
          <HStack alignItems='center' justifyContent='center' gap={1}>
            
            <Text color="gray.400" fontSize="medium">
              {specie}
              </Text>
              {
              CharactersRaceIcons[
                specie as keyof typeof CharactersRaceIcons
              ]
            }
            </HStack>
          </VStack>
            
        </VStack>
      </HStack>
    </Fade>
  );
};
