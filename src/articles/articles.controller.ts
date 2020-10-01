import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {
  }

  // @Get()
  // getAllArticles(): Article[] {
  //   return this.articlesService.getAllArticles();
  // }
  //
  // @Get('/:id')
  // getArticleById(@Param('id') id: string): Article {
  //   return this.articlesService.getArticleById(id)
  // }
  //
  // @Post()
  // @UsePipes(ValidationPipe)
  // createArticle(@Body() createArticleDto: CreateArticleDto): Article {
  //   return this.articlesService.createArticle(createArticleDto);
  //
  // }
  //
  // @Delete('/:id')
  // deleteArticle(@Param('id') id: string): void {
  //   return this.articlesService.deleteArticle(id);
  // }
}
