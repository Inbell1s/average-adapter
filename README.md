# Average Aggregator Adapter

Clone this repo and cd into the project directory

See [Install Locally](#install-locally) for a quickstart

## Input Params

- `base`, `from`, or `coin`: The symbol of the currency to query
- `quote`, `to`, or `market`: The symbol of the currency to convert to

## Sample Output

```json
{
  "jobRunID": "1",
  "data": {
    "base": "btc",
    "quote": "usd",
    "prices": [
      { "apiSource": "huobi", "value": 54762.1 }
      { "apiSource": "binance", "value": 54756.63 }
      { "apiSource": "gateio", "value": 54765.78 }
      { "apiSource": "coinbase", "value": 54827.86 }
      { "apiSource": "okex", "value": 54766.1 }
      { "apiSource": "ftx", "value": 54817 }
      { "apiSource": "kucoin", "value": 54764 }
    ]
  },
  "result": 54779.92,
  "statusCode": 200
}
```

## Install Locally

Install dependencies:

```bash
yarn
```
or
```bash
npm install
```

Natively run the application (defaults to port 8080):

### Run

```bash
yarn start
```
or
```bash
npm run start
```

## Call the external adapter/API server

```bash
curl --location --request POST 'http://localhost:8080' --header 'Accept: application/json' --header 'Content-Type: application/json' --data '{"data": {"base":"btc","quote":"usd"}}'
```

## Docker

If you wish to use Docker to run the adapter, you can build the image by running the following command:

```bash
docker build . -t average-adapter
```

Then run it with:

```bash
docker run -p 8080:8080 -it average-adapter:latest
```
