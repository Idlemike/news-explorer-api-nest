import { Body } from '@nestjs/common';

export class CreateArticleDto {
  title: string;
  keyword: string;
  text: string;
  source: string;
  owner: string;
  link: string;
  image: string;
}
