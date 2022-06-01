const ENVIRONMENT = 'DEV';

module.exports = {
  BASE_API_URL: ENVIRONMENT === 'DEV' ? 'https://chip.txend.com/API' : 'https://develop.agtechbv.com/API',
  BASE_URL: ENVIRONMENT === 'DEV' ? 'https://chip.txend.com' : 'https://develop.agtechbv.com',
  MERCHANT_ROLE_ID: '2',
};
