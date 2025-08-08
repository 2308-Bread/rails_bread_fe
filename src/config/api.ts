const config = {
    development: {
      apiUrl: 'http://localhost:3000',
    },
    production: {
      apiUrl: 'https://bread-rails-be.onrender.com',
    },
};

const environment = process.env.NODE_ENV as keyof typeof config;

export const API_CONFIG = config[environment] || config.development;
export const API_BASE_URL = API_CONFIG.apiUrl;