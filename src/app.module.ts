import { Module } from '@nestjs/common';
import { MinIOConfig, TypeOrmConfig } from './configurations/configurations';
import { PostController } from './core/post/post.controller';
import { PostService } from './core/post/post.service';

@Module({
  imports: [new TypeOrmConfig().init(), new MinIOConfig().init()],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
