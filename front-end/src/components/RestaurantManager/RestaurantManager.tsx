import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANTS } from '../../graphql/queries';
import { Button, Container, Stack } from '@mui/material';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

export default function RestaurantManager() {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListCount, setRestaurantListCount] = useState(0);

  const { error, loading, data } = useQuery(GET_RESTAURANTS, {
    variables: {
      pageSize: pageSize,
      page: page,
    },
  });

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
    <Container maxWidth='md' sx={{ paddingTop: '4rem' }}>
      {error && <div>Error...</div>}
      {!error && !data && loading && <div>Loading...</div>}
      {!error && !loading && data && (
        <Stack gap={4}>
          {restaurantList.map((data) => (
            <RestaurantCard restaurant={data} />
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
