/* eslint-disable prettier/prettier */

import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";

export const TypeORMConfiguration: TypeOrmModuleOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3305,
    "username": "root",
    "password": "705750",
    "database": "my_blogs",
    "synchronize": false,
    "entities": [UserEntity, BlogEntity],
};
