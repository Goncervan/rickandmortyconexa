import { renderHook, act } from "@testing-library/react-hooks";
import { useLandingController } from "./Landing.controller";

jest.mock("../../Services/characters.service");

describe("useLandingController", () => {
  test("should handle selection of first character", async () => {
    const { result } = renderHook(() => useLandingController());

    act(() => {
      result.current.handleSelectFirstCharacter("1", "Character 1");
    });

    expect(result.current.selectedCharacters[1].id).toBe("1");
    expect(result.current.selectedCharacters[1].name).toBe("Character 1");
  });

  test("should handle selection of second character", async () => {
    const { result } = renderHook(() => useLandingController());

    act(() => {
      result.current.handleSelectSecondCharacter("2", "Character 2");
    });

    expect(result.current.selectedCharacters[2].id).toBe("2");
    expect(result.current.selectedCharacters[2].name).toBe("Character 2");
  });
});
