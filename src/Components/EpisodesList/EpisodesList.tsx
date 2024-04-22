import { Divider, Text, VStack } from "@chakra-ui/react";
import { useEpisodesListController } from "./EpisodesList.controller";
import { useEffect } from "react";

export const EpisodesList = ({
  episodes,
  title,
  emptyMessage,
}: {
  episodes: string[];
  title: string;
  emptyMessage?: string;
}) => {
  const controller = useEpisodesListController();

  useEffect(() => {
    controller.handleGetEpisodes(episodes);
  }, [episodes]);

  return (
    <VStack
      h="full"
      w="33%"
      border="1px solid"
      borderColor="gray.800"
      bgColor="#13161B"
      rounded="lg"
    >
      <Text
        color="white"
        p={2}
        borderBottom="1px solid"
        fontWeight="semibold"
        borderColor="gray.600"
        w="full"
        textAlign="center"
      >
        {title}
      </Text>
      <VStack overflowY="scroll" h="full" w="full" gap={2} p={0}>
        {controller.episodesData?.length &&
          controller.episodesData?.map((episode) => (
            <>
              <Text
                px={2}
                w="full"
                textAlign="left"
                color="white"
                key={episode.id}
              >
                {episode.episode} - {episode.name} - {episode.air_date}
              </Text>
              <Divider />
            </>
          ))}
        {episodes.length === 0 && emptyMessage && <Text color='white'>{emptyMessage}</Text>}
      </VStack>
    </VStack>
  );
};
