import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateArticleDto } from './dto/create-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { Article } from './article.entity';
import { GetArticlesFilterDto } from './dto/get-articles-filter.dto';

const date = require('date-and-time');

const now = new Date();
const nowTime = date.format(now, 'YYYY/MM/DD HH:mm:ss');

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleRepository)
    private articleRepository: ArticleRepository,
  ) {}

  async getArticles(filterDto: GetArticlesFilterDto): Promise<Article[]> {
    return this.articleRepository.getArticles(filterDto);
  }

  async getArticleById(id: number): Promise<Article> {
    const found = await this.articleRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Article with ID "${id}" not found`);
    }
    return found;
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleRepository.createArticle(createArticleDto);
  }

  async deleteArticle(id: number): Promise<void> {
    const result = await this.articleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Article with ID "${id}" not found`);
    }
  }
}
