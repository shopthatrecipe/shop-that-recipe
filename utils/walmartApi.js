import https from 'https';
import { Buffer } from 'buffer';

// Your Walmart Marketplace Application credentials
const CLIENT_ID = 'ba2d383c-6601-485a-9316-cca1a632cade'; // ⚡ Replace this!
const CLIENT_SECRET = 'YOUR-CLIENT-SECRET-HERE'; // ⚡ Replace this!
const WALMART_API_URL = 'https://marketplace.walmartapis.com/v3/items?searchKeyword='; // Back to Marketplace API

// Create the Basic Auth header
function createBasicAuthHeader() {
  const credentials = `${CLIENT_ID}:${CLIENT_SECRET}`;
  const base64Credentials = Buffer.from(credentials).toString('base64');
  return `Basic ${base64Credentials}`;
}

// Search function
export async function searchWalmartProducts(keyword) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': createBasicAuthHeader(),
      'WM_QOS.CORRELATION_ID': Date.now().toString(),
      'Accept': 'application/json'
    }
  };

  const url = WALMART_API_URL + encodeURIComponent(keyword);

  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}


