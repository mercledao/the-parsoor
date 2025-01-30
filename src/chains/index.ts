import { CHAIN_ID } from "../enums";
import Optimism from "./Optimism";

export const chainParsers = {
  [CHAIN_ID.OPTIMISM]: new Optimism(),
};
