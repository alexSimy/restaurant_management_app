import { gql } from '@apollo/client';

export const GET_RESTAURANTS = gql`
  query Restaurants($pageSize: Float!, $page: Float!) {
    restaurants(pageSize: $pageSize, page: $page) {
      count
      rows {
        id
        name
        address
        email
        phone
      }
    }
  }
`;
