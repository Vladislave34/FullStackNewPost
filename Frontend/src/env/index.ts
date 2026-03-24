const API_BASE_URL  = import.meta.env.VITE_API_BASE_URL;
const API_ENV = {
    API_BASE_URL
} as const;

export default API_ENV;