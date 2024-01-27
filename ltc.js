import CoinKey from 'coinkey';

export default function generateLitecoinInfo(hexKeys) {
  const litecoinInfo = [];

  for (const hexKey of hexKeys) {
    try {
      const ltc = CoinKey(new Buffer.from(hexKey, 'hex'), { private: 0xB0, public: 0x30 });
      const wif = ltc.privateWif;
      const ltcout = ltc.publicAddress;

      litecoinInfo.push({ hex: hexKey, wif, address: ltcout });
    } catch (error) {
      console.error(`Error generating Litecoin info for hex key ${hexKey}: ${error.message}`);
    }
  }

  return litecoinInfo;
}
