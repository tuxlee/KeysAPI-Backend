import CoinKey from 'coinkey';

export default function generateNmccoinInfo(hexKeys) {
  const nmccoinInfo = [];

  for (const hexKey of hexKeys) {
    try {
      const nmc = CoinKey(new Buffer.from(hexKey, 'hex'), { private: 0xB2, public: 0x34 });
      const wif = nmc.privateWif;
      const nmcout = nmc.publicAddress;

      nmccoinInfo.push({ hex: hexKey, wif, address: nmcout });
    } catch (error) {
      console.error(`Error generating Nmccoin info for hex key ${hexKey}: ${error.message}`);
    }
  }

  return nmccoinInfo;
}
