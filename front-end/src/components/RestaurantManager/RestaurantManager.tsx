import { useLayoutEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_RESTAURANTS } from '../../graphql/queries';
import { Button, Container, Stack } from '@mui/material';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { CREATE_RESTAURANT, DELETE_RESTAURANT } from '../../graphql/mutations';
import { InsertRestaurantObj, Restaurant } from '../../types/Restaurant';
import AddRestaurant from '../AddRestaurant/AddRestaurant';

export default function RestaurantManager() {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListCount, setRestaurantListCount] = useState(0);
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const [deleteRestaurant, { error: deleteError }] = useMutation(
    DELETE_RESTAURANT,
    {
      refetchQueries: [GET_RESTAURANTS],
    }
  );

  const [createRestaurant, { error: createError }] = useMutation(
    CREATE_RESTAURANT,
    {
      refetchQueries: [GET_RESTAURANTS],
    }
  );

  const { error, loading, data } = useQuery(GET_RESTAURANTS, {
    variables: {
      pageSize: pageSize,
      page: page,
    },
  });

  const handleCreateRestaurantModalClose = () => {
    setShowAddBookModal(false);
  };

  const handleCreateRestaurant = (restaurant: InsertRestaurantObj) => {
    createRestaurant({
      variables: {
        name: restaurant.name,
        address: restaurant.address,
        phone: restaurant.phone,
        email: restaurant.email,
      },
    });
  };

  const handleDeleteRestaurant = (id: number) => {
    deleteRestaurant({
      variables: {
        id: id,
      },
    });
  };

  useLayoutEffect(() => {
    if (!error && !loading) {
      setRestaurantList(data.restaurants.rows);
      setRestaurantListCount(data.restaurants.count);
    }
  }, [data, error, loading]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  console.log(restaurantListCount, page, pageSize);

  return (
    <Container maxWidth='md' sx={{ padding: '4rem 0' }}>
      <Container
        sx={{
          padding: '2rem 0',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}
      >
        <Button
          variant='outlined'
          color='warning'
          sx={{ alignSelf: 'flex-end' }}
          onClick={() => {
            setShowAddBookModal(true);
          }}
        >
          <b>Add new restaurant</b>
        </Button>
      </Container>
      <AddRestaurant
        openModal={showAddBookModal}
        onModalClose={handleCreateRestaurantModalClose}
        onSubmit={handleCreateRestaurant}
      />
      {error && <div>Error...</div>}
      {!error && !data && loading && <div>Loading...</div>}
      {!error && !loading && data && (
        <Stack gap={4}>
          {restaurantList.map((data) => (
            <RestaurantCard
              restaurant={data}
              handleDelete={handleDeleteRestaurant}
            />
          ))}
        </Stack>
      )}
      <Stack
        direction={'row'}
        justifyContent={'flex-end'}
        gap={4}
        mt={4}
        maxWidth={'xl'}
      >
        {page > 1 && (
          <Button variant='outlined' color='warning' onClick={handlePrevPage}>
            <b>Prev Page</b>
          </Button>
        )}
        {page * pageSize < restaurantListCount && (
          <Button
            variant='outlined'
            color='warning'
            sx={{ alignSelf: 'flex-end' }}
            onClick={handleNextPage}
          >
            <b>Next Page</b>
          </Button>
        )}
      </Stack>
    </Container>
  );
}
