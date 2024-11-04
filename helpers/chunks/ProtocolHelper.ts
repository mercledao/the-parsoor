import { IProtocolContractDefinitions } from "../../src/types/chunks/IContractDefinition";

export class ProtocolHelper {
  public static extractAllContracts(
    protocolContracts: IProtocolContractDefinitions
  ): string[] {
    const listenerContracts: string[] = [];

    Object.values(protocolContracts).forEach((contracts) => {
      Object.values(contracts).forEach((deployment) => {
        listenerContracts.push(deployment.address);
      });
    });

    return listenerContracts;
  }
}
