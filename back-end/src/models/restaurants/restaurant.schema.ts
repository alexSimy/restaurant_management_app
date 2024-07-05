import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class Restaurant {
  @Field((type) => Number)
  id!: number;
  @Field((type) => String)
  name!: string;
  @Field((type) => String)
  address!: string;
  @Field((type) => String)
  email!: string;
  @Field((type) => String)
  phone!: string;
}

@ObjectType()
export class RestaurantsWithCount {
  @Field((type) => [Restaurant])
  rows!: Restaurant[];
  @Field((type) => Number)
  count!: number;
}
