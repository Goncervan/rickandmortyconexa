import { Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { CharacterList } from "../../Components/CharactersList/CharacterList";
import { useLandingController } from "./Landing.controller";
import { EpisodesList } from "../../Components/EpisodesList/EpisodesList";

export const Landing = () => {
  const controller = useLandingController();
  
  return (
    <VStack minH={"100vh"} w={"100vw"} bgColor={"red.200"}>
      <HStack>
        <Text>Selected Characters:</Text>
        <Text>{controller.selectedCharacters[1].name}</Text>
        <Text>{controller.selectedCharacters[2].name}</Text>
        <CharacterList handleSelectCharacter={controller.handleSelectFirstCharacter}/>
        <CharacterList handleSelectCharacter={controller.handleSelectSecondCharacter} />
      </HStack>
      <EpisodesList episodes={controller.firstCharacterEpisodes || []}/>
      <EpisodesList episodes={controller.sharedEpisodes || []}/>
      <EpisodesList episodes={controller.secondCharacterEpisodes || []}/>
    </VStack>
  );
};
