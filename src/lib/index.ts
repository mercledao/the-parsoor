import { protocols } from "../config";
import RhinoFi from "./RhinoFi";
import UniswapV2 from "./UniswapV2";

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswapV2.identifier]: new UniswapV2(),
};
