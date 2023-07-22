import { useMutation } from "@apollo/client"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import Logo from "@/images/logo.jpg"
import SmallLogo from "@/images/s_logo.png";
import { LOGIN } from "@/graphql/auth";
import { AUTH_TOKEN } from "@/utils/constant";

const Login = () => {
  
  const [tel, setTel] = useState("")
  const [password, setPassword] = useState("")
  const [login] = useMutation(LOGIN)
  const nav = useNavigate()

  const loginHandler = async() => {
    const res = await login({
      variables:{
        tel,
        password
      }
    })

    if(res.data.login.code === 200) {
      localStorage.setItem(AUTH_TOKEN, res.data.login.data)
      nav("/")
      return
    }
  }
 
  return (
    <div>
      <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* Left */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <img src={Logo} alt="" className="mt-4"/>
          </div>
          <div className="h-24 w-10 relative lg:hidden cursor-pointer">
            <img src={SmallLogo} alt="" className="mt-5"/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-64">
        <div className="h-32 w-64 flex flex-col">
          <h2 className="text-center font-semibold">Welcome to Instagram</h2>
          <input 
            type="text" 
            className="bg-gray-200 mt-4 rounded-lg p-2"
            placeholder="请输入手机号"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value)
            }}
          />
          <input 
            type="password"  
            className="bg-gray-200 mt-4 rounded-lg p-2"
            placeholder="请输入密码"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <button 
            className="bg-gradient-to-r from-pink-500 to-rose-500 mt-4 rounded-lg p-1"
            onClick={() => loginHandler()}
          >登录</button>
        </div>
      </div>
    </div>
  )
}

export default Login;