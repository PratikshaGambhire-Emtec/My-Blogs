/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/users/users.module";
import { BlogRepository } from "./blogs.repository";
import { BlogServices } from "./blogs.service";
import { BlogsController } from "./blogs.controller";


@Module({
    imports: [TypeOrmModule.forFeature([BlogRepository]), UserModule],
    controllers: [BlogsController,],
    providers: [BlogServices],

    
})

export class BlogsModule {}
