import { protocols } from "../config";
import Across from "./Across";
import Aerodrome from "./Aerodrome";
import Bex from "./Bex";
import Bungee from "./Bungee";
import BurrBear from "./BurrBear";
import Cowswap from "./Cowswap";
import Curve from "./Curve";
import Debridge from "./Debridge";
import Dodo from "./Dodo";
import Lynex from "./Lynex";
import Odos from "./Odos";
import Pancakeswap from "./Pancakeswap";
import Paraswap from "./Paraswap";
import RhinoFi from "./RhinoFi";
import Sushiswap from "./Sushiswap";
import Uniswap from "./Uniswap";

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswap.identifier]: new Uniswap(),
  // [protocols.lifi.identifier]: new Lifi(),
  [protocols.odos.identifier]: new Odos(),
  [protocols.across.identifier]: new Across(),
  [protocols.debridge.identifier]: new Debridge(),
  [protocols.aerodrome.identifier]: new Aerodrome(),
  [protocols.pancakeswap.identifier]: new Pancakeswap(),
  [protocols.cowswap.identifier]: new Cowswap(),
  [protocols.paraswap.identifier]: new Paraswap(),
  [protocols.sushiswap.identifier]: new Sushiswap(),
  [protocols.bungee.identifier]: new Bungee(),
  [protocols.curve.identifier]: new Curve(),
  [protocols.dodo.identifier]: new Dodo(),
  [protocols.lynex.identifier]: new Lynex(),
  [protocols.bex.identifier]: new Bex(),
  [protocols.burrbear.identifier]: new BurrBear(),
};
