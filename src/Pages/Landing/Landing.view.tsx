import { HStack, VStack } from "@chakra-ui/react";
import { CharacterList } from "../../Components/CharactersList/CharacterList";
import { useLandingController } from "./Landing.controller";
import { EpisodesList } from "../../Components/EpisodesList/EpisodesList";

export const Landing = () => {
  const controller = useLandingController();

  return (
    <VStack
      h="100vh"
      w="100vw"
      py={5}
      overflowX="hidden"
      bgColor="gray.900"
      justifyContent="center"
      alignItems="center"
      bgImage={`url(https://i.pinimg.com/originals/0a/eb/52/0aeb52af3cb13c91c0aead5aba52480f.jpg)`}
      bgPosition={"bottom"}
      gap={0}
    >
      <HStack
        h="60%"
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
        h="40%"
        w="full"
        p={0}
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
