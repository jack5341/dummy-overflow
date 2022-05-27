import { config } from 'dotenv';

config();

export const DATABASE = {
  HOST: process.env.POSTGRES_HOST || 'localhost',
  PORT: process.env.POSTGRES_PORT || '5432',
  USER: process.env.POSTGRES_USER || 'postgres',
  PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
  DATABASE: process.env.POSTGRES_DATABASE || 'dummy-overflow',
};
