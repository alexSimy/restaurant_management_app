import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookie from 'js-cookie';

export function initApolloClientWithTokenValue(): ApolloClient<NormalizedCacheObject> {
  const httpLink = createHttpLink({
    uri: 'http://localhost:5000/api/v1/restaurants/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = Cookie.get('token');
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
}
