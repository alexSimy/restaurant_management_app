import { gql } from '@apollo/client';

export const CREATE_RESTAURANT = gql`
  mutation CreateRestaurant(
    $phone: String!
    $email: String!
    $address: String!
    $name: String!
  ) {
    createRestaurant(
      phone: $phone
      email: $email
      address: $address
      name: $name
    ) {
      id
      name
      address
      phone
    }
  }
`;

export const DELETE_RESTAURANT = gql`
  mutation DeleteRestaurant($id: Float!) {
    deleteRestaurant(id: $id) {
      id
      name
      address
      email
      phone
    }
  }
`;

export const UPDATE_RESTAURANT = gql`
  mutation UpdateRestaurant(
    $phone2: String!
    $email: String!
    $address: String!
    $name: String!
    $id: Float!
  ) {
    updateRestaurant(
      phone: $phone
      email: $email
      address: $address
      name: $name
      id: $id
    ) {
      id
      name
      address
      email
      phone
    }
  }
`;
