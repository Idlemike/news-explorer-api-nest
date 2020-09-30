import { Injectable, NotFoundException } from '@nestjs/common';
import { Article } from './article.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateArticleDto } from './dto/create-article.dto';

const date = require('date-and-time');

const now = new Date();
const nowTime = date.format(now, 'YYYY/MM/DD HH:mm:ss');

@Injectable()
export class ArticlesService {
  private articles: Article[] = [];

  getAllArticles() {
    return this.articles;
  }

  getArticleById(id: string): Article {
    const found = this.articles.find(article => article.id === id);

    if (!found) {
      throw new NotFoundException(`Article with ID "${id}" not found`)
    }
    return found
  }

  createArticle(createArticleDto: CreateArticleDto): Article {
    const { title, keyword, text, source, link, image, owner } = createArticleDto;
    const article: Article = {
      id: uuidv4(),
      date: nowTime,
      title,
      keyword,
      text,
      source,
      link,
      image,
      owner,
    };
    this.articles.push(article);
    return article;
  }

  deleteArticle(id: string): void {
    const article = this.getArticleById(id);

    if(article) {
      this.articles = this.articles.filter(article => article.id !== id);
    }
  }
}
