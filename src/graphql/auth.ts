import { gql } from "@apollo/client"

// 通过账号 & 密码进行登录
export const LOGIN = gql`
  mutation login($tel: String!, $password: String!) {
    login(tel:$tel, password: $password) {
      code
      message
      data
    }
  }
`

// 通过上下文获取用户的信息
export const GET_USER_INFO = gql`
  query getUserInfo{
    getUserInfo{
      id
      name
      tel
      desc
      avatar
    }
  }
`