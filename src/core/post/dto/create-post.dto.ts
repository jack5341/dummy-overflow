import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  isPublished: boolean;

  @IsNotEmpty()
  content: string;
}
