/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entity/user.entity";
import { BlogTag } from "./blog.tag.enum";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BlogRepository } from "./blogs.repository"
import { BlogTemplateDto } from "./dto/blog.template.dto";

@Injectable()
export class BlogServices {
      //dependency injection
      constructor(
        @InjectRepository(BlogRepository)
        private blogRepository: BlogRepository,
        
        //for creating jwt token
        private jwtService: JwtService,
    
    
        ){}

   
    createBlog(Title: string, Content: string, Tags: BlogTag, Date: Date, user: UserEntity) {
        return this.blogRepository.createBlog(Title, Content, Tags, Date, user);
    }
    deleteBlog(Title: string, user: UserEntity,) {
        return this.blogRepository.deleteBlog(Title, user);
    }

    getBlogById(id: number, user: UserEntity,) {
        const blog = this.blogRepository.getBlogById(id, user);
        return { blog };
    }

    getBlogList()
    {
        return this.blogRepository.getBlogList();
    }

}