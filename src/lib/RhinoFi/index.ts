import { ProtocolHelper } from "../../../helpers";
import { protocols } from "../../config";
import { IProtocolParser } from "../../types";
import contracts from "./contracts";

export default class RhinoFiParser implements IProtocolParser {
  public readonly protocolIdentifier: string;

  constructor() {
    this.protocolIdentifier = protocols.rhinofi.identifier;
  }

  public getListenerContracts(): string[] {
    return ProtocolHelper.extractAllContracts(contracts);
  }
}
