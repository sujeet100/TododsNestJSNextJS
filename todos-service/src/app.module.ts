import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {join} from "path";
import {TodosModule} from "./todos/todos.module";
import {GraphQLModule} from "@nestjs/graphql";
import {TypeOrmModule} from "@nestjs/typeorm";
import config from "../ormconfig";

@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
