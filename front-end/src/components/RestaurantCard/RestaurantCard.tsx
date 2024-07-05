import { Restaurant } from '../../types/Restaurant';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import './RestaurantCard.css';

import restaurantIcon from '../../assets/restaurant.svg';
import DeleteButton from '../DeleteButton/DeleteButton';

type RestaurantCardProps = {
  restaurant: Restaurant;
  handleDelete: (id: number) => void;
};
export default function RestaurantCard({
  restaurant,
  handleDelete,
}: RestaurantCardProps) {
  return (
    <Card
      className='r-card'
      sx={{
        display: 'flex',
        backgroundColor: '#121212',
        gap: '2rem',
        padding: '1rem',
        borderRadius: '1rem',
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image={restaurantIcon}
        alt={restaurant.name}
      />
      <Box
        sx={{
          display: 'flex',
          flex: '1 0 auto',
          flexDirection: 'column',
        }}
      >
        <CardContent
          sx={{
            flex: '1 0 auto',
            justifyContent: 'flex-start',
            textAlign: 'left',
          }}
        >
          <Typography component='div' variant='h5' color={'#fff'}>
            {restaurant.name}
          </Typography>
          <Typography variant='subtitle1' color={'#ccc'} component='div'>
            {restaurant.address}
          </Typography>
          <Typography variant='subtitle2' color={'#aaa'} component='div'>
            {restaurant.phone}
          </Typography>
          <Typography variant='subtitle2' color={'#aaa'} component='div'>
            {restaurant.email}
          </Typography>
        </CardContent>
      </Box>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <DeleteButton id={restaurant.id} handleClick={handleDelete} />
      </CardActions>
    </Card>
  );
}
