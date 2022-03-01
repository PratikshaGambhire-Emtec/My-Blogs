/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { BlogTag } from "./blog.tag.enum";


@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity>{

    async createBlog(Title: string, Content: string, Tags: BlogTag, Date: Date, user: UserEntity,) {

        //const { Title, Content, Tags, Date } = blogTemplateDto;

        if (Title.length === 0 && Content.length === 0) {
            return 'Blog title and Blog content cannot be empty';
        }

        const blog = new BlogEntity();
        blog.Title = Title;
        blog.Content = Content;
        blog.Tags = Tags;
        blog.Date = Date;
        blog.userId = user.id;
        await blog.save();
        return blog;
    }

    async getBlogList()
    {
        //const query=this.createQueryBuilder('blogs')
        const bloglist=this.find()
        if(await bloglist){
            return bloglist;
        }
        else{
            return 'No blogs yet';
        }

    }

    async getBlogsByTags(Tags: BlogTag, Title: string) {
        const query = this.createQueryBuilder('blogs')
        query.andWhere('Tags = :Tags OR Title = :Title', { Tags: Tags, Title: Title })
        return query.getMany();
    }

    async deleteBlog(Title: string, user: UserEntity,) {

        const query = this.createQueryBuilder('blogs')

        query.andWhere('Title=:Title', { Title: Title });
        query.andWhere('blogs.userId=:userId', { userId: user.id })

        const blog = query.getOne()

        //console.log(await blog)

        if (await blog) {
            this.delete(await blog);
        }
        else {
            throw new NotFoundException('Blog not found');
        }
    }

    async getBlogById(id: number, user: UserEntity,) {
        const query = this.createQueryBuilder('blogs');

        query.andWhere('blogs.userId=:userId AND id=:id', { userId: user.id, id: id });

        const blog = query.getOne();
        //console.log('outside blog')
        if (await blog) {
            //console.log('inside blog' + await blog)
            return await blog;
        }
        throw new NotFoundException('Blog not found')

    }


    async getComments(blog: BlogEntity, user: UserEntity,) {

        const query = this.createQueryBuilder('comments')
        query.andWhere('comments.blogId=:blogId', { blogId: blog.id })

        const comments = query.getMany();

        if (await comments) {
            return await comments;
        }
        else {
            return 'No Comments yet';
        }
    }

}
