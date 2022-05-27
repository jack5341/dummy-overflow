import { TypeOrmModule } from '@nestjs/typeorm';
import { MinioModule } from 'nestjs-minio-client';
import { config } from 'dotenv';

config();

class Constants {
  public static readonly DB_CONNECTION_OPTIONS = {
    HOST: process.env.POSTGRES_HOST || 'localhost',
    PORT: process.env.POSTGRES_PORT || '5432',
    USER: process.env.POSTGRES_USER || 'postgres',
    PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
    DATABASE: process.env.POSTGRES_DATABASE || 'dummy-overflow',
  };

  public static readonly MINIO_CONNECTION_OPTIONS = {
    ACCESS_KEY: process.env.MINIO_ACCESS_KEY || 'minioaccess',
    SECRET_KEY: process.env.MINIO_SECRET_KEY || 'miniosecret',
    PORT: process.env.PORT || 9000,
    END_POINT: process.env.MINIO_END_POINT || 'localhost',
  };
}

export class TypeOrmConfig {
  DB: {
    HOST: string;
    PORT: string;
    USER: string;
    PASSWORD: string;
    DATABASE: string;
  };
  constructor() {
    this.DB = Constants.DB_CONNECTION_OPTIONS;
  }

  init() {
    return TypeOrmModule.forRoot({
      type: 'postgres',
      host: this.DB.HOST,
      port: Number(this.DB.PORT),
      username: this.DB.USER,
      password: this.DB.PASSWORD,
      database: this.DB.DATABASE,
    });
  }
}

export class MinIOConfig {
  MINIO: {
    ACCESS_KEY: string;
    SECRET_KEY: string;
    END_POINT: string;
    PORT: string | number;
  };
  constructor() {
    this.MINIO = Constants.MINIO_CONNECTION_OPTIONS;
  }

  init() {
    return MinioModule.register({
      endPoint: this.MINIO.END_POINT,
      port: Number(this.MINIO.PORT),
      useSSL: false,
      accessKey: this.MINIO.ACCESS_KEY,
      secretKey: this.MINIO.SECRET_KEY,
    });
  }
}
