const config = require('dotenv').config();

const API_REF = {
  binance: {
    getUri: (base, quote) => {
      const api = 'https://api.binance.com/api/v1/ticker/price';
      const url = `${api}?symbol=${base.toUpperCase()}${quote.toUpperCase()}T`;

      return url;
    },
    getPath: (base, quote) => {
      return ['price'];
    }
  },
  polygon: {
    getUri: (base, quote) => {
      const apiKey = process.env.POLYGON_API_KEY;
      const api = 'https://api.polygon.io/v1/last/crypto';
      const url = `${api}/${base.toUpperCase()}/${quote.toUpperCase()}?apiKey=${apiKey}`;

      return url;
    },
    getPath: (base, quote) => {
      return ['last', 'price'];
    }
  },
  finage: {
    getUri: (base, quote) => {
      const apiKey = process.env.FINAGE_API_KEY;
      const api = 'https://api.finage.co.uk/last/crypto';
      const url = `${api}/${base.toLowerCase()}${quote.toLowerCase()}?apiKey=${apiKey}`;

      return url;
    },
    getPath: (base, quote) => {
      return ['price'];
    }
  }
};

class CustomAggregator {
  static apiSources = Object.keys(API_REF);

  static getUrl(source, base, quote) {
    return API_REF[source].getUri(base, quote);
  };

  static getPath(source, base, quote) {
    return API_REF[source].getPath(base, quote);
  };

  static getMedian(values) {
    const mid = Math.floor(values.length / 2);
    const nums = [...values].sort((a, b) => a - b);
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
};

module.exports = CustomAggregator;
