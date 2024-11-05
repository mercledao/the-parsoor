import { protocols } from "../config";
import RhinoFi from "./RhinoFi";

export const parsers = {
  [protocols.rhinofi.identifier]: new RhinoFi(),
};
