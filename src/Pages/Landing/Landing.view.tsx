import { HStack, VStack } from "@chakra-ui/react";
import { CharacterList } from "../../Components/CharactersList/CharacterList";

export const Landing = () => {
  return (
    <VStack minH={"100vh"} w={"100vw"} bgColor={"red.200"}>
      <HStack>
        <CharacterList/>
      </HStack>
      <HStack>
        <VStack></VStack>
        <VStack></VStack>
        <VStack></VStack>
      </HStack>
    </VStack>
  );
};
