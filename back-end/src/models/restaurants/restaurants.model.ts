export async function getRestaurants(page: number, pageSize: number) {
  //to be implemented
}

export async function filterRestaurantsBySearchTerm(
  searchTerm: string,
  page: number,
  pageSize: number
) {
  //to be implemented
}

export async function addRestaurant(
  name: string,
  address: string,
  email: string,
  phone: string
) {
  //to be implemented
}

export async function updateRestaurant(
  id: number,
  name: string,
  address: string,
  email: string,
  phone: string
) {
  //to be implemented
}

export async function deleteRestaurant(id: number) {
  //to be implemented
}
