import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE } from './configurations/configurations';
import { PostController } from './core/post/post.controller';
import { PostService } from './core/post/post.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DATABASE.HOST,
      port: Number(DATABASE.PORT),
      username: DATABASE.USER,
      password: DATABASE.PASSWORD,
      database: DATABASE.DATABASE,
    }),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
