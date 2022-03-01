/* eslint-disable prettier/prettier */
import { BlogTag } from "../blog.tag.enum";

export class BlogTemplateDto {

    Title: string;

    Content: string;

    Tags: BlogTag;

    Date: Date;

}