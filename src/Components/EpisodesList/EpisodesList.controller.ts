import { EpisodesService } from "../../Services/episodes.service";
import { useAsync } from "../../Utils/UseAsync";
import { getEpisodeNumber } from "../../Utils/getEpisodeNumber";

export const useEpisodesListController = () => {
  const [episodesData, error, loading, getEpisodesData, , , clearEpisodesData] =
    useAsync(EpisodesService.getEpisodesData, {
      defaultValue: [],
      onSuccess: () => {
        console.log("success");
      },
      onError: () => {
        console.log("error");
      },
    });

  const handleGetEpisodes = (episodes: string[]) => {
    if (episodes.length === 0) {
      clearEpisodesData();
    }
    const episodesNumbers = episodes
      .map((episode) => getEpisodeNumber(episode))
      .filter((episode) => episode !== null) as string[];
    getEpisodesData(episodesNumbers);
  };

  return { handleGetEpisodes, episodesData, error, loading };
};
