import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './article.entity';
import { GetArticlesFilterDto } from './dto/get-articles-filter.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {
  }

  @Get()
  getArticles(@Query(ValidationPipe) filterDto: GetArticlesFilterDto): Promise<Article[]> {
    return this.articlesService.getArticles(filterDto);
  }

  @Get('/:id')
  getArticleById(@Param('id', ParseIntPipe) id: number): Promise<Article> {
    return this.articlesService.getArticleById(id);
  }

  //
  @Post()
  @UsePipes(ValidationPipe)
  createArticle(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.createArticle(createArticleDto);
  }

  @Delete('/:id')
  deleteArticle(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.articlesService.deleteArticle(id);
  }
}
