import { Text, VStack } from "@chakra-ui/react";
import { useEpisodesListController } from "./EpisodesList.controller";
import { useEffect } from "react";

export const EpisodesList = ({ episodes }: { episodes: string[] }) => {
  const controller = useEpisodesListController();

  useEffect(() => {
      if (episodes.length > 0) {
      controller.handleGetEpisodes(episodes);
    }
  }, [episodes]);

  return (
    <VStack border='1px solid' borderColor='gray.200'>
      {controller.episodesData?.length && controller.episodesData?.map((episode) => (
        <Text key={episode.id}>{episode.name}</Text>
      ))}
    </VStack>
  );
};
