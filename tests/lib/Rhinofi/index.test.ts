import { ProtocolParserUtils } from '../..';
import { protocols } from '../../../src';

describe('RhinofiParser', () => {
  let utils: ProtocolParserUtils;

  beforeAll(async () => {
    utils = new ProtocolParserUtils(protocols.rhinofi.identifier);
    await utils.initialize();
  });

  it('is correctly defined', () => {
    utils.isValidProtocol();
  });
});
