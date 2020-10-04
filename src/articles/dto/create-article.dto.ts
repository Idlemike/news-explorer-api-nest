import { Body } from '@nestjs/common';
import { IsNotEmpty, IsUrl, MinLength, MaxLength } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  title: string;
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  keyword: string;
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  text: string;
  @IsNotEmpty()
  @IsUrl()
  source: string;
  @MinLength(2)
  @MaxLength(30)
  @IsNotEmpty()
  owner: string;
  @IsNotEmpty()
  @IsUrl()
  link: string;
  @IsNotEmpty()
  @IsUrl()
  image: string;
}
