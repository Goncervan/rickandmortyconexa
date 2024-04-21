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

  const [sharedEpisodes, setSharedEpisodes] = useState<string[]>([]);

  const [
    firstCharacterEpisodes,
    ,
    ,
    getFirstCharacterEpisodes,
    ,
    ,
    clearFirstCharacterEpisodes,
  ] = useAsync(CharactersService.getCharacterEpisodes, {
    defaultValue: [],
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });
  // data, error, loading, execute, refreshing, refresh, clear;
  const [
    secondCharacterEpisodes,
    ,
    ,
    getSecondCharacterEpisodes,
    ,
    ,
    clearSecondCharacterEpisodes,
  ] = useAsync(CharactersService.getCharacterEpisodes, {
    defaultValue: [],
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const handleSelectFirstCharacter = (id: string, name: string) => {
    setSelectedCharacters({
      ...selectedCharacters,
      1: { id, name },
    });
    if (id === "") {
      clearFirstCharacterEpisodes();
      setSharedEpisodes([]);
    }
  };
  const handleSelectSecondCharacter = (id: string, name: string) => {
    setSelectedCharacters({
      ...selectedCharacters,
      2: { id, name },
    });
    if (id === "") {
      clearSecondCharacterEpisodes();
      setSharedEpisodes([]);
    }
  };

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
