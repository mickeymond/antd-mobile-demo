import { gql } from 'apollo-boost';

export const LOGIN = gql`
mutation Login($googleOAuthToken: String!) {
  login(googleOAuthToken: $googleOAuthToken) {
    _id
    token
    role
  }
}
`;

export const REGISTER = gql`
mutation Register($googleOAuthToken: String!) {
  register(googleOAuthToken: $googleOAuthToken) {
    _id
    token
    role
  }
}
`;