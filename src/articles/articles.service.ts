import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateArticleDto } from './dto/create-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { Article } from './article.entity';

const date = require('date-and-time');

const now = new Date();
const nowTime = date.format(now, 'YYYY/MM/DD HH:mm:ss');

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleRepository)
    private articleRepository: ArticleRepository,
  ) {

  }

  // private articles: Article[] = [];

  // getAllArticles() {
  //   return this.articles;
  // }
  //
  async getArticleById(id: number): Promise<Article> {
    const found = await this.articleRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Article with ID "${id}" not found`);
    }
    return found;
  }
  //
  // createArticle(createArticleDto: CreateArticleDto): Article {
  //   const { title, keyword, text, source, link, image, owner } = createArticleDto;
  //   const article: Article = {
  //     id: uuidv4(),
  //     date: nowTime,
  //     title,
  //     keyword,
  //     text,
  //     source,
  //     link,
  //     image,
  //     owner,
  //   };
  //   this.articles.push(article);
  //   return article;
  // }
  //
  // deleteArticle(id: string): void {
  //   const article = this.getArticleById(id);
  //
  //   if(article) {
  //     this.articles = this.articles.filter(article => article.id !== id);
  //   }
  // }
}
