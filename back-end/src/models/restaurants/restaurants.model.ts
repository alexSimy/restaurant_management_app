import { Op, SequelizeScopeError } from 'sequelize';
import { Restaurant } from './restaurant.schema';
import restaurants from './restaurants.sequalize';

export async function getRestaurants(
  page: number,
  pageSize: number
): Promise<Restaurant[]> {
  const offset = (page - 1) * pageSize;
  const records = await restaurants.findAll({
    offset: offset > 0 ? offset : 0,
    limit: pageSize > 0 ? pageSize : undefined,
    subQuery: false,
  });

  return records;
}

export async function filterRestaurantsBySearchTerm(
  searchTerm: string,
  page: number,
  pageSize: number
): Promise<Restaurant[]> {
  const offset = (page - 1) * pageSize;
  const records = await restaurants.findAll({
    where: {
      name: {
        [Op.substring]: searchTerm,
      },
    },
    offset: offset > 0 ? offset : 0,
    limit: pageSize > 0 ? pageSize : undefined,
    subQuery: false,
  });

  return records;
}

export async function createRestaurant(
  name: string,
  address: string,
  email: string,
  phone: string
): Promise<Restaurant> {
  const newRecord = await restaurants.create({
    name,
    address,
    email,
    phone,
  });

  return newRecord;
}
export async function updateRestaurant(
  id: number,
  name: string,
  address: string,
  email: string,
  phone: string
): Promise<Restaurant> {
  const foundRecord = await restaurants.findOne({ where: { id: id } });
  if (!foundRecord) {
    throw new SequelizeScopeError(
      `Record with id ${id} from restaurant table does not exist!`
    );
  }
  await foundRecord.update({
    name: name,
    address: address,
    email: email,
    phone: phone,
  });

  return foundRecord;
}

export async function deleteRestaurant(id: number): Promise<Restaurant> {
  const foundRecord = await restaurants.findOne({ where: { id: id } });
  if (!foundRecord) {
    throw new SequelizeScopeError(
      `Record with id ${id} from restaurant table does not exist!`
    );
  }
  foundRecord.destroy();
  return foundRecord;
}
