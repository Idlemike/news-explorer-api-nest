import { Body } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  keyword: string;
  @IsNotEmpty()
  text: string;
  @IsNotEmpty()
  source: string;
  @IsNotEmpty()
  owner: string;
  @IsNotEmpty()
  link: string;
  @IsNotEmpty()
  image: string;
}
