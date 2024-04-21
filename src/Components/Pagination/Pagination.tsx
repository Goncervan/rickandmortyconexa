import { HStack, IconButton, Text } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
      <IconButton
        backdropFilter={"blur(10px)"}
        isDisabled={!prevPage}
        onClick={handlePrevPage}
        icon={<IoIosArrowBack />}
        aria-label="Previous"
      />
      <Text w="2ch" textAlign="center" color="white">
        {currentPage}
      </Text>
      <IconButton
        backdropFilter={"blur(10px)"}
        isDisabled={!nextPage}
        onClick={handleNextPage}
        icon={<IoIosArrowForward />}
        aria-label="Next"
      />
    </HStack>
  );
};
