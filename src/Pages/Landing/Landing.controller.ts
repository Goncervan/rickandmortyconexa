import { useEffect, useState } from "react";
import { useAsync } from "../../Utils/UseAsync";
import { CharactersService } from "../../Services/characters.service";

export const useLandingController = () => {
  // ------------------
  // ----Characters----
  // ------------------
  const [selectedCharacters, setSelectedCharacters] = useState({
    1: { id: "", name: "" },
    2: { id: "", name: "" },
  });

  const handleSelectFirstCharacter = (id: string, name: string) => {
    setSelectedCharacters({
      ...selectedCharacters,
      1: { id, name },
    });
  };
  const handleSelectSecondCharacter = (id: string, name: string) => {
    setSelectedCharacters({
      ...selectedCharacters,
      2: { id, name },
    });
  };
  // ------------------
  // -----Episodes-----
  // ------------------

  const [sharedEpisodes, setSharedEpisodes] = useState<string[]>([]);

  const [
    firstCharacterEpisodes,
    firstCharacterEpisodesError,
    firstCharacterEpisodesLoading,
    getFirstCharacterEpisodes,
  ] = useAsync(CharactersService.getCharacterEpisodes, {
    defaultValue: [],
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });
  const [
    secondCharacterEpisodes,
    secondCharacterEpisodesError,
    secondCharacterEpisodesLoading,
    getSecondCharacterEpisodes,
  ] = useAsync(CharactersService.getCharacterEpisodes, {
    defaultValue: [],
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  useEffect(() => {
    if (selectedCharacters[1].id !== "") {
      getFirstCharacterEpisodes(selectedCharacters[1].id);
    }
  }, [selectedCharacters[1]]);

  useEffect(() => {
    if (selectedCharacters[2].id !== "") {
      getSecondCharacterEpisodes(selectedCharacters[2].id);
    }
  }, [selectedCharacters[2]]);

  useEffect(() => {
    const sharedEpisodes = firstCharacterEpisodes?.filter((episode) =>
      secondCharacterEpisodes?.includes(episode)
    );
    if (sharedEpisodes) {
      setSharedEpisodes(sharedEpisodes);
    }
  }, [firstCharacterEpisodes, secondCharacterEpisodes]);

  return {
    selectedCharacters,
    handleSelectFirstCharacter,
    handleSelectSecondCharacter,
    // Episodes
    sharedEpisodes,
    firstCharacterEpisodes,
    secondCharacterEpisodes,
  };
};
