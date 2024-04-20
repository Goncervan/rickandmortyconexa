import { VStack } from "@chakra-ui/react";
import { useCharacterListController } from "./CharacterList.controller";
import { Pagination } from "../Pagination/Pagination";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export const CharacterList = ({
  handleSelectCharacter,
}: {
  handleSelectCharacter: (id: string, name: string) => void;
}) => {
  const controller = useCharacterListController();
  return (
    <VStack>
      {controller.characters?.results.map((character) => (
        <CharacterCard 
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          specie={character.species}
          id={character.id.toString()}
          handleSelectCharacter={handleSelectCharacter}
        />
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
