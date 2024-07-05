# restaurant_management_app
Restaurant management app having both server side and client side.

#### Working schedule ####
First day: 🕟 16:30 - 21:00 🕘 \
Second day: 🕒 15:02 - 19:06 🕖

#### What I didn't managed to finish the following requirements ####
- Edit restaurant modal
- Sadly, no tests were added.
- Implement a database seed that will insert 100 randomly generated restaurants in
the database. To generate random data you can use chance.js or similar.
- forgot to stop the default action of the form in `AddRestaurant` Modal.
- forgot to close the `AddRestaurant` Modal after creating new restaurant.

#### What to improve later ####
- Move `themes` into redux store or Context
- Finish `Edit restaurant modal`
- Add tests !
- Create component for the MUI modified components

### In order to run the programs ###

Backend : \
you need to create a `.env` file in the main folder of the back-end application that looks like this:
```
// port on which the backend will run
PORT=5000
// in order to limit access from foreign sites. Put either '*' either the front-end application port
CORS_FRONT_END=*
// postgresql HOST
PG_HOST=localhost
// postgresql USER
PG_USER=postgres
// postgresql PORT
PG_PORT=5432
// postgresql PASSWORD
PG_PASSWORD=stongPass
// postgresql DATABASE
PG_DB=postgres
```

Then, you need to run `npm run tsc` in order to compile the `.ts` files into '.js' or use `npm run tsc:watch` in order to start compiling while wokring.
Afterwards you can start the back-end server with `npm start` or `npm run start:watch` if you want to keep working on it.

APIs:
- POST /api/v1/users/login: that takes a json with {"username":"someUser", "password":"somePassword"}
- POST /api/v1/users/register: that takes a json with {"username":"someUser", "password":"somePassword"}
- POST /api/v1/: that takes a json with {"token":"sometoken"}

GraphQL:
- POST /api/v1/restaurants/graphql: You can use `https://studio.apollographql.com/sandbox/explorer` to interact easily with the graphql part.



Frontend: \
you can run `npm start` and the front-end application should run on `localhost:3000`



