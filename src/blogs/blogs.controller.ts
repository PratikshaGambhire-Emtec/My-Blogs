/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserEntity } from "src/entity/user.entity";
import { GetUser } from "src/users/get.user.decorator";
import { BlogTag } from "./blog.tag.enum";
import { BlogServices } from "./blogs.service"


@Controller('blogger_table')
@UseGuards(AuthGuard())
export class BlogsController {
    constructor(private readonly blogservice: BlogServices) {
    }

    @Post('createblog')
    @UsePipes(ValidationPipe)
    createBlog(@GetUser() user: UserEntity, @Body('Title') Title: string, @Body('Content') Content: string, @Body('Tags') Tags: BlogTag, @Body('Date') Date: Date) {
        console.log(Title)
        return this.blogservice.createBlog(Title, Content, Tags, Date, user);
    }

    @Delete('deleteblog')
    deleteBlog(@GetUser() user: UserEntity, @Body('Title') Title: string) {
        return this.blogservice.deleteBlog(Title, user);
    }

    @Get('getblogbyid')
    getBlogById(@GetUser() user: UserEntity, @Body('id') id: number) {
        return this.blogservice.getBlogById(id, user);
    }

    @Get('bloglist')
    getBlogList()
    {
        return this.blogservice.getBlogList();
    }

}