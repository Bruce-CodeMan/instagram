import { gql } from "@apollo/client"

export const LOGIN = gql`
  mutation login($tel: String!, $password: String!) {
    login(tel:$tel, password: $password) {
      code
      message
      data
    }
  }
`