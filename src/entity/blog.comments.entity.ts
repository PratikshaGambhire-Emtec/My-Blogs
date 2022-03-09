/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BlogEntity } from "./blog.entity";

@Entity('comment_section')
export class CommentEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    userComment: string;

    @Column()
    blogId: number;

    @ManyToOne(type => BlogEntity, blog => blog.comments, { eager: true })
    blog: BlogEntity;
}