import { Divider, Text, VStack } from "@chakra-ui/react";
import { useEpisodesListController } from "./EpisodesList.controller";
import { useEffect } from "react";

export const EpisodesList = ({
  episodes,
  title,
}: {
  episodes: string[];
  title: string;
}) => {
  const controller = useEpisodesListController();

  useEffect(() => {
    if (episodes.length > 0) {
      controller.handleGetEpisodes(episodes);
    }
  }, [episodes]);

  return (
    <VStack
      h='full'
      w="33%"
      border="1px solid"
      borderColor="gray.800"
      bgColor={"gray.900"}
      rounded="lg"
    >
      <Text color="white"
      p={2}  borderBottom='2px solid' fontWeight='semibold' borderColor='gray.600' w='full' textAlign='center'>{title}</Text>
      <VStack overflowY="scroll" h="full" w="full" gap={2} p={0}>
        {controller.episodesData?.length &&
          controller.episodesData?.map((episode) => (
            <>
            <Text px={2} w="full" textAlign='left' color="white" key={episode.id}>
              {episode.id} - {episode.name} - {episode.air_date}
              </Text>
              <Divider/>
            </>
          ))}
      </VStack>
    </VStack>
  );
};
