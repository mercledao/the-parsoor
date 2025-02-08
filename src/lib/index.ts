import { protocols } from "../config";
import Odos from "./Odos";
import Lifi from './LiFi';
import RhinoFi from "./RhinoFi";
import Uniswap from "./Uniswap";
import Across from "./Across";
import Debridge from "./Debridge";
import Bungee from "./Bungee"
import Aerodrome from "./Aerodrome";
import Pancakeswap from "./Pancakeswap";
import Cowswap from "./Cowswap";
import Paraswap from "./Paraswap";
import Stargate from "./Stargate";

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswap.identifier]: new Uniswap(),
  [protocols.lifi.identifier]: new Lifi(),
  [protocols.odos.identifier]: new Odos(),
  [protocols.across.identifier]: new Across(),
  [protocols.debridge.identifier]: new Debridge(),
  [protocols.bungee.identifier]: new Bungee(),
  [protocols.aerodrome.identifier]: new Aerodrome(),
  [protocols.pancakeswap.identifier]: new Pancakeswap(),
  [protocols.cowswap.identifier]: new Cowswap(),
  [protocols.paraswap.identifier]: new Paraswap(),
  [protocols.stargate.identifier]: new Stargate(),
};
