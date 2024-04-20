import { HStack, Text, VStack } from "@chakra-ui/react";
import { CharacterList } from "../../Components/CharactersList/CharacterList";
import { useLandingController } from "./Landing.controller";

export const Landing = () => {
  const controller = useLandingController();
  return (
    <VStack minH={"100vh"} w={"100vw"} bgColor={"red.200"}>
      <HStack>
        <Text>Selected Characters:</Text>
        <Text>{controller.selectedCharacters[1]}</Text>
        <Text>{controller.selectedCharacters[2]}</Text>
        <CharacterList handleSelectCharacter={controller.handleSelectFirstCharacter}/>
        <CharacterList handleSelectCharacter={controller.handleSelectSecondCharacter}/>
      </HStack>
    </VStack>
  );
};
