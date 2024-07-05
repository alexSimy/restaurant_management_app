import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Restaurant, RestaurantsWithCount } from './restaurant.schema';
import * as restaurantsModel from './restaurants.model';
@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => RestaurantsWithCount)
  async restaurants(
    @Arg('page', () => Number) page: number,
    @Arg('pageSize', () => Number) pageSize: number
  ): Promise<RestaurantsWithCount> {
    return await restaurantsModel.getRestaurants(page, pageSize);
  }

  @Query(() => RestaurantsWithCount)
  async searchRestaurants(
    @Arg('searchTerm', () => String) searchTerm: string,
    @Arg('page', () => Number) page: number,
    @Arg('pageSize', () => Number) pageSize: number
  ): Promise<RestaurantsWithCount> {
    return await restaurantsModel.filterRestaurantsBySearchTerm(
      searchTerm,
      page,
      pageSize
    );
  }

  @Query(() => RestaurantsWithCount)
  async countRestaurants(
    @Arg('searchTerm', () => String) searchTerm: string,
    @Arg('page', () => Number) page: number,
    @Arg('pageSize', () => Number) pageSize: number
  ): Promise<RestaurantsWithCount> {
    return await restaurantsModel.filterRestaurantsBySearchTerm(
      searchTerm,
      page,
      pageSize
    );
  }

  @Mutation(() => Restaurant)
  async createRestaurant(
    @Arg('name', () => String) name: string,
    @Arg('address', () => String) address: string,
    @Arg('email', () => String) email: string,
    @Arg('phone', () => String) phone: string
  ): Promise<Restaurant | undefined> {
    return await restaurantsModel.createRestaurant(name, address, email, phone);
  }

  @Mutation(() => Restaurant)
  async updateRestaurant(
    @Arg('id', () => Number) id: number,
    @Arg('name', () => String) name: string,
    @Arg('address', () => String) address: string,
    @Arg('email', () => String) email: string,
    @Arg('phone', () => String) phone: string
  ): Promise<Restaurant | undefined> {
    return await restaurantsModel.updateRestaurant(
      id,
      name,
      address,
      email,
      phone
    );
  }

  @Mutation(() => Restaurant)
  async deleteRestaurant(
    @Arg('id', () => Number) id: number
  ): Promise<Restaurant | undefined> {
    return await restaurantsModel.deleteRestaurant(id);
  }
}
