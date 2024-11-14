import { protocols } from '../config';
import Lifi from './Lifi';
import RhinoFi from './RhinoFi';
import Uniswap from './Uniswap';

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswap.identifier]: new Uniswap(),
  [protocols.lifi.identifier]: new Lifi()
};
