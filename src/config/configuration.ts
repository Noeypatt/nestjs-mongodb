export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    name: process.env.DATABASE_NAME || 'demo',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3001,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'example',
  },
});
