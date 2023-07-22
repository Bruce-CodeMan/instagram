
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from "@apollo/client"
import { client } from '@/utils/apollo.ts'
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Custom Imports
import Login from '@/containers/Login/index.tsx'
import UserInfo from './components/UserInfo/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <UserInfo>
      
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<App />}></Route>
        </Routes>
      
      </UserInfo>
    </BrowserRouter>
  </ApolloProvider>
)
