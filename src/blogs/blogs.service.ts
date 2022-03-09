/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entity/user.entity";
import { BlogCommentRepository } from "./blog.comments.repository";
import { BlogTag } from "./blog.tag.enum";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BlogRepository } from "./blogs.repository"
import { BlogTemplateDto } from "./dto/blog.template.dto";

@Injectable()
export class BlogServices {

    constructor(@InjectRepository(BlogRepository) private blogRepository: BlogRepository, @InjectRepository(BlogCommentRepository) private blogCommentRepository: BlogCommentRepository) {

    }
    createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity) {
        return this.blogRepository.createBlog(blogTitle, blogContent, blogTags, blogDate, user);
    }

    getBlogsByTags(blogTags: BlogTag, blogTitle: string,) {
        return this.blogRepository.getBlogsByTags(blogTags, blogTitle);
    }

    deleteBlog(id: number) {
        return this.blogRepository.deleteBlog(id);
    }

   
    getBlogById(id: number) {
        return this.blogRepository.getBlogById(id);
    }

    /* addComment(id: number, userComment: string, user: UserEntity) {
        return this.blogCommentRepository.addComment(id, userComment, user);
    }

    getComments(id: number) {
        return this.blogCommentRepository.getComments(id);
    } */

    getBlogList()
    {
        return this.blogRepository.getBlogList();
    }

    getMyblogs(user: UserEntity) {
        return this.blogRepository.getMyblogs(user);
    }

    addComment(id: number, userComment: string, user: UserEntity) {
        return this.blogCommentRepository.addComment(id, userComment, user);
    }

    getComments(id: number) {
        return this.blogCommentRepository.getComments(id);
    }

    deleteComments(id: number) {
        return this.blogCommentRepository.deleteComment(id)
    }

}