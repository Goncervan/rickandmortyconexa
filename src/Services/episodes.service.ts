import axios from "axios";
import { API_URL } from "../Utils/constants";
import { EpisodeDTO } from "../Models/EpisodesDtos";
export const EpisodesService = {
  getEpisodesData: async (episodes: string[]): Promise<EpisodeDTO[]> => {
    const response = await axios.get(
      `${API_URL}/episode/${episodes.join(",")}`
    );
    if (episodes.length === 1) {
      return [response.data];
    }
    return response.data;
  },
};
