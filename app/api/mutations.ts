import {gql} from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $secret: String!) {
    loginByMail(Params: {email: $email, secret: $secret}) {
      access_token
      refresh_token
      user_name
      admin
    }
  }
`;
