import { useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";


// Custom Imports
import { connectFactory, useAppContext } from "@/utils/contextFactory";
import { GET_USER_INFO } from "@/graphql/auth";
import { IUser } from "@/utils/types";
import { USER_KEY } from "@/utils/constant";

export const useUserContext = () => useAppContext<IUser>(USER_KEY)

export const connect = connectFactory(USER_KEY, {})

export const useGetUser = () => {
  const { setStore } = useUserContext();
  const location = useLocation();
  const nav = useNavigate()
  const { loading, refetch } = useQuery<{ getUserInfo: IUser }>(GET_USER_INFO, {
    onCompleted: (data) => {
      if(data.getUserInfo){
        const { id, tel, name, desc, avatar } = data.getUserInfo;
        setStore({
          id,
          tel,
          name,
          desc,
          avatar
        })
        if(location.pathname.startsWith("/login")) {
          nav("/")
        }
        return;
      }
    },
    onError: () => {
      setStore({ refetchHandler: refetch })
      if(location.pathname !== "/login"){
        nav(`/login?orignalUrl=${location.pathname}`)
      }
    }
  })

  return { loading, refetch }
}