import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

// Custom Imports
import { AUTH_TOKEN, HTTP_LINK } from "./constant"