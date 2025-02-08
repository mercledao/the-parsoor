import { protocols } from "../config";
import Across from "./Across";
import Aerodrome from "./Aerodrome";
import Cowswap from "./Cowswap";
import Debridge from "./Debridge";
import Lifi from "./LiFi";
import Odos from "./Odos";
import Pancakeswap from "./Pancakeswap";
import Paraswap from "./Paraswap";
import RhinoFi from "./RhinoFi";
import Uniswap from "./Uniswap";
import Balancer from "./Balancer"

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswap.identifier]: new Uniswap(),
  [protocols.lifi.identifier]: new Lifi(),
  [protocols.odos.identifier]: new Odos(),
  [protocols.across.identifier]: new Across(),
  [protocols.debridge.identifier]: new Debridge(),
  [protocols.aerodrome.identifier]: new Aerodrome(),
  [protocols.pancakeswap.identifier]: new Pancakeswap(),
  [protocols.cowswap.identifier]: new Cowswap(),
  [protocols.paraswap.identifier]: new Paraswap(),
  [protocols.balancer.identifier]: new Balancer(),
};
