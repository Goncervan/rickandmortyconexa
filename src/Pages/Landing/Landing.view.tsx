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
      p={8}
      overflowX="hidden"
      bgColor="#0D0E12"
      justifyContent="center"
      alignItems="center"
      bgPosition={"bottom"}
      gap={6}
    >
      <HStack
        h="60%"
        overflowY="hidden"
        w="full"
        justifyContent="center"
        alignItems="center"
        bgColor="#13161B"
        rounded="md"
        gap={0}
      >
        <CharacterList
          handleSelectCharacter={controller.handleSelectFirstCharacter}
          selectedCharacterName={controller.selectedCharacters[1].name}
        />
        <VStack w="1px" bgColor="gray.700" h="full" />
        <CharacterList
          handleSelectCharacter={controller.handleSelectSecondCharacter}
          selectedCharacterName={controller.selectedCharacters[2].name}
        />
      </HStack>
      <HStack
        h="40%"
        w="full"
        overflowY="hidden"
        justifyContent="space-between"
        alignItems="center"
        // gap={2}
      >
        <EpisodesList
          title={
            controller.selectedCharacters[1].name.length > 0
              ? `${controller.firstCharacterEpisodes?.length} Episodios de ${controller.selectedCharacters[1].name}`
              : "Selecciona un personaje"
          }
          episodes={controller.firstCharacterEpisodes || []}
        />
        <EpisodesList
          title={`${controller.sharedEpisodes.length} Episodio${controller.sharedEpisodes.length === 1 ? "" : "s"} Compartido${controller.sharedEpisodes.length === 1 ? "" : "s"}`}
          episodes={controller.sharedEpisodes || []}
          emptyMessage="No hay episodios compartidos"
        />
        <EpisodesList
          title={
            controller.selectedCharacters[2].name.length > 0
              ? `${controller.secondCharacterEpisodes?.length} Episodio${controller.secondCharacterEpisodes?.length === 1 ? "" : "s"} de ${controller.selectedCharacters[2].name}`
              : "Selecciona un personaje"
          }
          episodes={controller.secondCharacterEpisodes || []}
        />
      </HStack>
    </VStack>
  );
};
