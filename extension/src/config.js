// Configuration file for API URLs
// This file handles the 3 URL variables that were causing issues with environment loading

// Check if we're in development or production mode
const isDevelopment = import.meta.env.DEV || import.meta.env.MODE === 'development';

// Development URLs
const DEV_CONFIG = {
  VITE_API_URL: 'http://localhost:8000',
  VITE_SITE_URL: 'http://localhost:5173',
  VITE_MAIN_SITE_URL: 'http://localhost:5173'
};

// Production URLs
const PROD_CONFIG = {
  VITE_API_URL: 'https://auto-twitter-replies.onrender.com',
  VITE_SITE_URL: 'https://getverve.xyz',
  VITE_MAIN_SITE_URL: 'https://getverve.xyz'
};

// Export the appropriate config based on environment
export const config = isDevelopment ? DEV_CONFIG : PROD_CONFIG;

// Export individual variables for convenience
export const API_BASE = config.VITE_API_URL;
export const SITE_URL = config.VITE_SITE_URL;
export const MAIN_SITE_URL = config.VITE_MAIN_SITE_URL;

// Log the current configuration (for debugging)
console.log('[Config] Environment:', isDevelopment ? 'development' : 'production');
console.log('[Config] API_BASE:', API_BASE);
console.log('[Config] SITE_URL:', SITE_URL);
console.log('[Config] MAIN_SITE_URL:', MAIN_SITE_URL); 