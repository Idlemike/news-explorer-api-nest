import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  keyword: string;

  @Column()
  text: string;

  @Column()
  source: string;

  // @Column("timestamp")
  // date: string;

  @Column()
  owner: string;

  @Column()
  link: string;

  @Column()
  image: string;
}
