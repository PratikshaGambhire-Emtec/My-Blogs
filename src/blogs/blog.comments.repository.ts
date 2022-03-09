/* eslint-disable prettier/prettier */
import { CommentEntity } from "src/entity/blog.comments.entity";
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";



@EntityRepository(CommentEntity)
export class BlogCommentRepository extends Repository<BlogCommentRepository>{

    async addComment(id: number, userComment: string, user: UserEntity) {
        const comment = new CommentEntity();
        comment.userComment = userComment;
        comment.blogId = id;
        if (user) {
            comment.userName = (user.firstName + " " +user.lastName)
        }
        await comment.save();
        return comment;
    }

    async getComments(id: number) {
        const query = this.createQueryBuilder('comments');
        query.andWhere('comments.blogId=:blogId', { blogId: id });

        const comments = query.getMany()

        if (await comments) {
            return await comments;
        }
    }

    async deleteComment(id: number) {
        const query= this.createQueryBuilder("comments");
        query.andWhere('comments.id=:id',{id:id});
        const comments=query.getOne();
        this.delete(await comments);
        return;
    }


}