import { protocols } from '../config';
import RhinoFi from './RhinoFi';
import UniswapV3 from './UniswapV3';

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
  [protocols.uniswapv3.identifier]: new UniswapV3()
};
