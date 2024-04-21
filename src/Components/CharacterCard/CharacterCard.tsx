import {
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
        backdropFilter={"blur(10px)"}
        sx={{ boxShadow: "10px 10px 12px rgba(0,0,0,.6)" }}
        onClick={onClick}
      >
        <Image h={32} w={32} src={image} alt={name} roundedLeft="xl" />
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
          <HStack alignItems='center' justifyContent='center' gap={1}>
            <Text color="gray.400" fontSize="medium">
              {status}
            </Text>
            {
              CharactersStatusesIcons[
                status as keyof typeof CharactersStatusesIcons
              ]
            }
          </HStack>
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
