import { protocols } from "../config";
import Odos from "./Odos";
import Lifi from './LiFi';
import RhinoFi from "./RhinoFi";
import Uniswap from "./Uniswap";
import Across from "./Across";
import Debridge from "./Debridge";
import Oneinch from "./Oneinch";
import Cowswap from "./Cowswap";

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswap.identifier]: new Uniswap(),
  [protocols.lifi.identifier]: new Lifi(),
  [protocols.odos.identifier]: new Odos(),
  [protocols.across.identifier]: new Across(),
  [protocols.debridge.identifier]: new Debridge(),
  [protocols.oneinch.identifier]: new Oneinch(),
  [protocols.cowswap.identifier]: new Cowswap()
};
