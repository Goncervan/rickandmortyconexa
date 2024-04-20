import { Button, VStack } from "@chakra-ui/react";
import { useCharacterListController } from "./CharacterList.controller";
import { Pagination } from "../Pagination/Pagination";

export const CharacterList = ({
  handleSelectCharacter,
}: {
  handleSelectCharacter: (value: string) => void;
}) => {
  const controller = useCharacterListController();
  return (
    <VStack>
      {controller.characters?.results.map((character) => (
        <Button
          onClick={() => handleSelectCharacter(character.name)}
          key={character.id}
        >
          {character.name} {character.id}
        </Button>
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
