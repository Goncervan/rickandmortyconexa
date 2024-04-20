import { Text, VStack } from "@chakra-ui/react";
import { useEpisodesListController } from "./EpisodesList.controller";
import { useEffect } from "react";

export const EpisodesList = ({ episodes, title }: { episodes: string[], title:string }) => {
  const controller = useEpisodesListController();

  useEffect(() => {
      if (episodes.length > 0) {
      controller.handleGetEpisodes(episodes);
    }
  }, [episodes]);

  return (
    <VStack h={56} w="30%" border='1px solid' borderColor='gray.200'>
      <Text color="white">{title}</Text>
      <VStack overflowY="scroll" h="full" w="full">
      {controller.episodesData?.length && controller.episodesData?.map((episode) => (
        <Text color="white" key={episode.id}>{episode.name}</Text>
        ))}
        </VStack>
    </VStack>
  );
};
