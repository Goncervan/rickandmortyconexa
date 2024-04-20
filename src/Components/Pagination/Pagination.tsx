import { Button, HStack, Text } from "@chakra-ui/react";
export const Pagination = ({
  currentPage,
  handleNextPage,
  nextPage,
  handlePrevPage,
  prevPage,
}: {
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  prevPage: boolean;
  nextPage: boolean;
}) => {
  return (
    <HStack>
      <Button isDisabled={!prevPage} onClick={handlePrevPage}>
        Prev
      </Button>
      <Text>{currentPage}</Text>
      <Button isDisabled={!nextPage} onClick={handleNextPage}>
        Next
      </Button>
    </HStack>
  );
};
