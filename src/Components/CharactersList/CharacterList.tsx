import { Grid, Spinner, Text, VStack } from "@chakra-ui/react";
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
    <VStack w="50%" h="100%" pt={5} pb={1}>
      {selectedCharacterName !== "" ? (
        <Text fontSize="x-large" fontWeight="semibold" color="white">
          Seleccionado:{" "}
          <Text textDecor="underline" display="inline">
            {selectedCharacterName}
          </Text>
        </Text>
      ) : (
        <Text fontSize="x-large" fontWeight="semibold" color="white">
          Selecciona un personaje
        </Text>
      )}
      <Grid
        w="full"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        overflowY="scroll"
        px={6}
        py={4}
      >
        {controller.loadingCharacters && <Spinner />}
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
      {!controller.loadingCharacters && (
        <Pagination
          currentPage={controller.currentPage}
          handleNextPage={controller.handleNextPage}
          nextPage={controller.nextPage}
          handlePrevPage={controller.handlePrevPage}
          prevPage={controller.prevPage}
        />
      )}
    </VStack>
  );
};
