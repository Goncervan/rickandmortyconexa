import { HStack, Text, VStack } from "@chakra-ui/react";
import { CharacterList } from "../../Components/CharactersList/CharacterList";
import { useLandingController } from "./Landing.controller";
import { EpisodesList } from "../../Components/EpisodesList/EpisodesList";

export const Landing = () => {
  const controller = useLandingController();

  return (
    <VStack
      h="100vh"
      w="100vw"
      py={10}
      overflowX="hidden"
      bgColor="gray.900"
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        h="50%"
        overflowY="hidden"
        w="full"
        justifyContent="center"
        alignItems="center"
        gap={0}

      >
        <CharacterList
          handleSelectCharacter={controller.handleSelectFirstCharacter}
          selectedCharacterName={controller.selectedCharacters[1].name}
        />
        <CharacterList
          handleSelectCharacter={controller.handleSelectSecondCharacter}
          selectedCharacterName={controller.selectedCharacters[2].name}
        />
      </HStack>
      <HStack
        h="50%"
        w="full"
        overflowY="hidden"
        justifyContent="center"
        alignItems="center"
        gap={0}
      >
        <EpisodesList
          title={
            controller.selectedCharacters[1].name.length > 0
              ? `Episodios de ${controller.selectedCharacters[1].name}`
              : "Selecciona un personaje"
          }
          episodes={controller.firstCharacterEpisodes || []}
        />
        <EpisodesList
         title={"Episodios compartidos"} episodes={controller.sharedEpisodes || []} />
        <EpisodesList
         title={
          controller.selectedCharacters[2].name.length > 0
            ? `Episodios de ${controller.selectedCharacters[2].name}`
            : "Selecciona un personaje"
        }
        episodes={controller.secondCharacterEpisodes || []} />
      </HStack>
    </VStack>
  );
};
