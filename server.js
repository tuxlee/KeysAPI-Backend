import express from 'express';
import cors from 'cors';
import hexKeys from './hexkeys.js';
import generateBitcoinInfo from './btc.js';
import generateLitecoinInfo from './ltc.js';
import generateDogecoinInfo from './doge.js';
import generateNmccoinInfo from './nmc.js';

const app = express();

app.use(express.json());
app.use(cors());

const port = 3333;


app.get('/api/btc/:page', async (req, res) => {
  const { page } = req.params;
  const hexKeysData = hexKeys({ params: { page } });
  const bitcoinInfo = generateBitcoinInfo(hexKeysData.hexKeys);
  
  const combinedInfo = {
    bitcoin: bitcoinInfo
  };

  res.json(combinedInfo);
});

app.get('/api/ltc/:page', async (req, res) => {
  const { page } = req.params;
  const hexKeysData = hexKeys({ params: { page } });
  const litecoinInfo = generateLitecoinInfo(hexKeysData.hexKeys);
  const combinedInfo = {
    litecoin: litecoinInfo,
  };

  res.json(combinedInfo);
});

app.get('/api/doge/:page', async (req, res) => {
  const { page } = req.params;
  const hexKeysData = hexKeys({ params: { page } });
  const dogecoinInfo = generateDogecoinInfo(hexKeysData.hexKeys);
  const combinedInfo = {
    dogecoin: dogecoinInfo,
  };

  res.json(combinedInfo);
});

app.get('/api/nmc/:page', async (req, res) => {
  const { page } = req.params;
  const hexKeysData = hexKeys({ params: { page } });
  const nmccoinInfo = generateNmccoinInfo(hexKeysData.hexKeys);
  const combinedInfo = {
    nmccoin: nmccoinInfo,
  };

  res.json(combinedInfo);
});

app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });