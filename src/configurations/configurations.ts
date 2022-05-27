export const DATABASE = {
  HOST: 'localhost' || process.env.DATABASE_HOST,
  PORT: '5432' || process.env.DATABASE_PORT,
  USER: 'postgres' || process.env.DATABASE_USER,
  PASSWORD: 'postgres' || process.env.DATABASE_PASSWORD,
  DATABASE: 'dummy-overflow' || process.env.DATABASE_DATABASE,
};
