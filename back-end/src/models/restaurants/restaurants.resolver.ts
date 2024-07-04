import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Restaurant } from './restaurant.schema';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => Restaurant)
  async restaurants(
    @Arg('page') page: number,
    @Arg('pageSize') pageSize: number
  ): Promise<Restaurant> {
    return { id: 1, name: '', address: '', email: '', phone: '' };
    //return await restaurantsModel.getRestaurants(page, pageSize); // WithPagination
  }

  @Query(() => Restaurant)
  async searchRestaurants(
    @Arg('searchTerm') searchTerm: string,
    @Arg('page') page: number,
    @Arg('pageSize') pageSize: number
  ): Promise<Restaurant> {
    return { id: 1, name: '', address: '', email: '', phone: '' };
    //return await restaurantsModel.filterRestaurantsBySearchTerm(searchTerm, page, pageSize); // WithPagination
  }

  //• createRestaurant(name, address, email, phone)
  //• updateRestaurant(id, name, address, email, phone)
  //• deleteRestaurant(id)

  @Mutation(() => Restaurant)
  async createRestaurant(
    @Arg('name') name: string,
    @Arg('address') address: string,
    @Arg('email') email: string,
    @Arg('phone') phone: string
  ): Promise<Restaurant | undefined> {
    return { id: 1, name: '', address: '', email: '', phone: '' };
    // return await restaurantsModel.addRestaurant(name, address, email, phone);
  }

  @Mutation(() => Restaurant)
  async updateRestaurant(
    @Arg('id') id: number,
    @Arg('name') name: string,
    @Arg('address') address: string,
    @Arg('email') email: string,
    @Arg('phone') phone: string
  ): Promise<Restaurant | undefined> {
    return { id: 1, name: '', address: '', email: '', phone: '' };
    // return await restaurantsModel.updateRestaurant(name, address, email, phone);
  }

  @Mutation(() => Restaurant)
  async deleteRestaurant(
    @Arg('id') id: number
  ): Promise<Restaurant | undefined> {
    return { id: 1, name: '', address: '', email: '', phone: '' };
    // return await restaurantsModel.deleteRestaurant(id);
  }
}
