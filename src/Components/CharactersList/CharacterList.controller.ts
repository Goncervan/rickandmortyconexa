import { useEffect, useState } from "react";
import { CharactersService } from "../../Services/characters.service";
import { useAsync } from "../../Utils/UseAsync";

export const useCharacterListController = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  const [characters, charactersError, loadingCharacters, getCharacters] =
    useAsync(CharactersService.getCharacters, {
      onSuccess: () => {
        console.log("success");
      },
      onError: () => {
        console.log("error");
      },
    });

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (characters) {
      characters.info.next ? setNextPage(true) : setNextPage(false);
      characters.info.prev ? setPrevPage(true) : setPrevPage(false);
    }
  }, [characters]);

  return {
    characters,
    charactersError,
    loadingCharacters,
    handleNextPage,
    handlePrevPage,
  };
};
