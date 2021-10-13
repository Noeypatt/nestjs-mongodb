export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    name: process.env.demo,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3001,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
});
