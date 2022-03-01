/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, BaseEntity } from 'typeorm';
import { UserEntity } from './user.entity';
import { IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { BlogTag } from 'src/blogs/blog.tag.enum';

@Entity('blogs')
@Unique(['Title'])
export class BlogEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    Title: string;

    @IsNotEmpty()
    @Column()
    Content: string;

    @Column()
    Tags: BlogTag;

    @Column()
    Date: Date;

    @IsNotEmpty()
    @Column()
    userId: number;

    @ManyToOne(type => UserEntity, user => user.blogs, { eager: false })
    user: UserEntity;

}
