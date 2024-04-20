import { Button, VStack } from "@chakra-ui/react";
import { useCharacterListController } from "./CharacterList.controller";
import { Pagination } from "../Pagination/Pagination";

export const CharacterList = () => {
  const controller = useCharacterListController();
  return (
    <VStack>
      {controller.characters?.results.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
      <Pagination
        currentPage={controller.currentPage}
        handleNextPage={controller.handleNextPage}
        nextPage={controller.nextPage}
        handlePrevPage={controller.handlePrevPage}
        prevPage={controller.prevPage}
      />
    </VStack>
  );
};
