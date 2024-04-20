import axios from "axios";
import { API_URL } from "../Utils/constants";
import { CharacterDTO, getCharactersDTO } from "../Models/CharactersDtos";
export const CharactersService = {
  getCharacters: async (page: number): Promise<getCharactersDTO> => {
    const response = await axios.get(`${API_URL}/character/?page=${page}`);
    return response.data;
  },
  getCharacterEpisodes: async (id: string): Promise<string[]> => {
    const response = await axios.get(`${API_URL}/character/${id}`);
    return response.data.episode;
  },
};
