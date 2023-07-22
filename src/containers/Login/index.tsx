import Logo from "@/images/logo.jpg"
import SmallLogo from "@/images/s_logo.png";

const Login = () => {
  
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
          <input type="text" className="bg-gray-200 mt-4 rounded-lg p-2"/>
          <input type="text"  className="bg-gray-200 mt-4 rounded-lg p-2"/>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 mt-4 rounded-lg p-1">登录</button>
        </div>
      </div>
    </div>
  )
}

export default Login;