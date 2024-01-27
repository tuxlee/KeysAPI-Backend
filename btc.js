import CoinKey from 'coinkey';

export default function generateBitcoinInfo(hexKeys) {
  const bitcoinInfo = [];

  for (const hexKey of hexKeys) {
    try {
      const btc = CoinKey(new Buffer.from(hexKey, 'hex'), { private: 0xB0, public: 0x30 });
      const wif = btc.privateWif;
      const btcout = btc.publicAddress;

      bitcoinInfo.push({ hex: hexKey, wif, btcout });
    } catch (error) {
      console.error(`Error generating Litecoin info for hex key ${hexKey}: ${error.message}`);
    }
  }

  return bitcoinInfo;
}