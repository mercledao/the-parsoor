import { protocols } from "../config";
import Odos from "./Odos";
import Lifi from './LiFi';
import RhinoFi from "./RhinoFi";
import Uniswap from "./Uniswap";
import Across from "./Across";
import Debridge from "./Debridge";
<<<<<<< HEAD
import Stargate from "./Stargate";
=======
import Bungee from "./Bungee"
>>>>>>> d198654 (feat: add Bungee protocol implementation with transaction parsing)

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswap.identifier]: new Uniswap(),
  [protocols.lifi.identifier]: new Lifi(),
  [protocols.odos.identifier]: new Odos(),
  [protocols.across.identifier]: new Across(),
  [protocols.debridge.identifier]: new Debridge(),
<<<<<<< HEAD
  [protocols.stargate.identifier]: new Stargate(),
=======
  [protocols.bungee.identifier]: new Bungee(),
>>>>>>> d198654 (feat: add Bungee protocol implementation with transaction parsing)
};
