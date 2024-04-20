import axios from "axios";
import { API_URL } from "../Utils/constants";
import { getCharactersDTO } from "../Models/CharactersDtos";
export const CharactersService = {
  getCharacters: async (): Promise<getCharactersDTO> => {
    const response = await axios.get(API_URL);
    return response.data;
  },
};