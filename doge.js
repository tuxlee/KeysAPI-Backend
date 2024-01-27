import CoinKey from 'coinkey';

export default function generateDogecoinInfo(hexKeys) {
  const dogecoinInfo = [];

  for (const hexKey of hexKeys) {
    try {
      const doge = CoinKey(new Buffer.from(hexKey, 'hex'), { private: 0x9e, public: 0x1e });
      const wif = doge.privateWif;
      const dogeout = doge.publicAddress;

      dogecoinInfo.push({ hex: hexKey, wif, address: dogeout });
    } catch (error) {
      console.error(`Error generating Dogecoin info for hex key ${hexKey}: ${error.message}`);
    }
  }

  return dogecoinInfo;
  }
