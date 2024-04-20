import { useState } from "react";

export const useLandingController = () => {
  const [selectedCharacters, setSelectedCharacters] = useState({
    1: "",
    2: "",
  });

  const handleSelectFirstCharacter = (value: string) => {
    setSelectedCharacters({
      ...selectedCharacters,
      1: value,
    });
  };
  const handleSelectSecondCharacter = (value: string) => {
    setSelectedCharacters({
      ...selectedCharacters,
      2: value,
    });
  };

  return {
    selectedCharacters,
    handleSelectFirstCharacter,
    handleSelectSecondCharacter,
  };
};
