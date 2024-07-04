import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class Restaurant {
  @Field()
  id!: number;
  @Field()
  name!: string;
  @Field()
  address!: string;
  @Field()
  email!: string;
  @Field()
  phone!: string;
}
