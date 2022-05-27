import { Module } from '@nestjs/common';
import { PostController } from './core/post/post.controller';
import { PostService } from './core/post/post.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
