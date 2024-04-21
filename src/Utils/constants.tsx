import { GiDeadHead, GiSeaCreature } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";
import { PiAlienBold } from "react-icons/pi";
import { FaPerson } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";
import { FaDisease } from "react-icons/fa6";
import { GiInsectJaws } from "react-icons/gi";

export const API_URL = "https://rickandmortyapi.com/api";

export const CharactersStatusesIcons = {
  Dead: <GiDeadHead color="gray.400"/>,
  Alive: <FaHeart color="gray.400"/>,
  unknown: <MdOutlineQuestionMark color="gray.400"/>,
};
export const CharactersRaceIcons = {
  Alien: <PiAlienBold color="gray.400" />,
  Human: <FaPerson color="gray.400" />,
  Humanoid: <FaPerson color="gray.400" />,
  'Mythological Creature': <GiSeaCreature color="gray.400" />,
  Robot: <FaRobot color="gray.400" />,
  Disease: <FaDisease color="gray.400" />,
  Cronenberg: <GiInsectJaws color="gray.400" />,
};
