import { Injectable } from '@nestjs/common';
import { Article } from './article.model';
import { v4 as uuidv4 } from 'uuid';
const date = require('date-and-time');

const now = new Date();
const nowTime = date.format(now, 'YYYY/MM/DD HH:mm:ss');
@Injectable()
export class ArticlesService {
  private articles: Article[] = [];
  getAllArticles() {
    return this.articles;
  }

  createArticle(title: string, keyword: string, text: string, source: string, link: string, image: string, owner: string): Article {
    const article: Article = {
      id: uuidv4(),
      date: nowTime,
      title,
      keyword,
      text,
      source,
      link,
      image,
      owner
    };
      this.articles.push(article);
      return article;
  }
}
