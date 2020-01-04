import { gql } from 'apollo-boost';

export const GET_PROFILE = gql`
query {
  profile {
    _id
    firstName
    lastName
    email
    picture
    role
  }
}
`;