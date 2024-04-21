import { Grid, Text, VStack } from "@chakra-ui/react";
import { useCharacterListController } from "./CharacterList.controller";
import { Pagination } from "../Pagination/Pagination";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export const CharacterList = ({
  handleSelectCharacter,
  selectedCharacterName,
}: {
  handleSelectCharacter: (id: string, name: string) => void;
  selectedCharacterName: string;
}) => {
  const controller = useCharacterListController();
  return (
    <VStack w="50%" h="100%" py={5}>
      <Text
        mb={4}
        fontSize="x-large"
        fontWeight="semibold"
        color="white"
      >
        {selectedCharacterName !== ""
          ? `Seleccionado: ${selectedCharacterName}`
          : "Selecciona un personaje"}
      </Text>
      <Grid w="full" templateColumns="repeat(3, 1fr)" gap={4} overflowY="scroll" p={10}>
        {controller.characters?.results.map((character) => (
          <CharacterCard
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            specie={character.species}
            id={character.id.toString()}
            isSelected={selectedCharacterName === character.name}
            handleSelectCharacter={handleSelectCharacter}
          />
        ))}
      </Grid>
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
