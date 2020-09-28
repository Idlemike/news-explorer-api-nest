import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {
  }

  @Get()
  getAllArticles(): Article[] {
    return this.articlesService.getAllArticles();
  }

  @Get('/:id')
  getArticleById(@Param('id') id: string): Article {
    return this.articlesService.getArticleById(id)
  }

  @Post()
  createArticle(@Body() createArticleDto: CreateArticleDto): Article {
    return this.articlesService.createArticle(createArticleDto);

  }
}
