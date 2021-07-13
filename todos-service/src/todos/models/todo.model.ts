import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field((type) => Int)
  id: number;

  @Field({ description: 'Todo Description' })
  description: string;

  @Field({ description: 'Is todo completed' })
  status: boolean;
}
