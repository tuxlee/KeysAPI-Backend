# KeysAPI-Backend - Frontend UI SOON TO COME
My take on keys.lol using Node.js/Express. Multiple Coins! BTC, LTC, DOGE &amp; NMC

Welcome to the CoinInfo API! This open-source project provides information about various cryptocurrencies using a simple RESTful API.

## Installation

To get started, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/tuxlee/KeysAPI-Backend.git
   cd coininfo-api
   npm install
   node server.js

2. Endpoints:
   ```bash
   GET /api/btc/:page for Bitcoin
   GET /api/ltc/:page for Litecoin
   GET /api/doge/:page for Dogecoin
   GET /api/nmc/:page for Namecoin
   curl http://localhost:3333/api/btc/1 -----for page 1

3. Would generate a JSON reponse like (But with 128 keys):
   ```
   {"bitcoin":
   [{
   "hex":
   "0000000000000000000000000000000000000000000000000000000000000001",
   "wif":
   "T33ydQRKp4FCW5LCLLUB7deioUMoveiwekdwUwyfRDeGZm76aUjV",
   "btcout":
   "LVuDpNCSSj6pQ7t9Pv6d6sUkLKoqDEVUnJ"},
   {"hex":
   "0000000000000000000000000000000000000000000000000000000000000002",
   "wif":
   "T33ydQRKp4FCW5LCLLUB7deioUMoveiwekdwUwyfRDeGaFvPgwLX",
   "btcout":
   "LKqJxEKxN7SnCEpj3ia3Z9DuAD1HNjh1hx"},
   {"hex":
   "0000000000000000000000000000000000000000000000000000000000000003",
   "wif":
   "T33ydQRKp4FCW5LCLLUB7deioUMoveiwekdwUwyfRDeGakooUYaf",
   "btcout":
   "LWhKVQ3Nvs26Dp8ntcM6ybPEvHK6Y4VWZU"},
   {"hex":
   "0000000000000000000000000000000000000000000000000000000000000004",
   "wif":
   "T33ydQRKp4FCW5LCLLUB7deioUMoveiwekdwUwyfRDeGbFhvbCzs",
   "btcout":
   "Ld7GQQim6YDimXhg4PLp5nvJqhQn9zPyu4"}
   }].....


4. Changing amount of keys per page. (Be pollite depending on resources)
   In file hexkeys.js line #3

   ```
   const seedsPerPage = 128;
128 Keys per page ran flawless on a very bare server for testing. Adjust on your own terms.

Feel free to explore and integrate these modules into your own projects!

Contributions are welcome! If you have ideas for improvement or would like to report a bug, please open an issue or submit a pull request.

bc1qm6ylnhsgearj66tzuvugauepvsl5432jnpr8rw Bitcoin

ltc1qry7qp833ee6wynnl8fmvevvn2kjj22sah485h0 Litecoin

DBcnFRCNugzPfzQsEHTaZmcU5it63bAygR Dogecoin

0xD62F301080D09F647c1a122211ce1CEdD4671a6e ETH

Happy coding!
