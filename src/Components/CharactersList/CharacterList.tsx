import { Button, VStack } from '@chakra-ui/react'
import { useCharacterListController } from './CharacterList.controller';

export const CharacterList = () => {
    const controller = useCharacterListController();
  return (
      <VStack>
          {controller.characters?.results.map((character) => (
              <div key={character.id}>{character.name}</div>
          ))}
          <Button onClick={controller.handlePrevPage}>Prev</Button>
          <Button onClick={controller.handleNextPage}>Next</Button>
    </VStack>
  )
}
