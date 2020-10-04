import { EntityRepository, Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { GetArticlesFilterDto } from './dto/get-articles-filter.dto';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {

  async getArticles(filterDto: GetArticlesFilterDto): Promise<Article[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('article');

    if (search) {
      query.andWhere('(article.owner LIKE :search OR article.keyword LIKE :search OR article.title LIKE :search)', { search: `%${search}%` })
    }

    const articles = await query.getMany();
    return articles;
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    const { title, keyword, text, source, owner, link, image } = createArticleDto;
    const article = new Article();
    article.title = title;
    article.keyword = keyword;
    article.text = text;
    article.source = source;
    article.owner = owner;
    article.link = link;
    article.image = image;
    await article.save();

    return article;
  }
}
