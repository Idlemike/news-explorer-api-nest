import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.model';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {
  }

  @Get()
  getAllArticles(): Article[] {
    return this.articlesService.getAllArticles();
  }

  @Post()
  createArticle(
    @Body('title') title: string,
    @Body('keyword') keyword: string,
    @Body('text') text: string,
    @Body('source') source: string,
    @Body('owner') owner: string,
    @Body('link') link: string,
    @Body('image') image: string,
  ): Article {
    return this.articlesService.createArticle(title, keyword, text, source, owner, link, image)

  }
}
