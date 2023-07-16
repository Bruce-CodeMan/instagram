import { AiOutlineSearch } from "react-icons/ai";

import Logo from "@/images/logo.jpg"
import SmallLogo from "@/images/s_logo.png";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* Left */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <img src={Logo} alt="" className="mt-4"/>
          </div>
        <div className="h-24 w-10 relative lg:hidden cursor-pointer">
          <img src={SmallLogo} alt="" className="mt-4"/>
        </div>

      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute left-2 top-1.5">
          <AiOutlineSearch className="text-gray-500"/>
        </div>
        <input 
          type="text" 
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black rounded-md py-1"
        />
      </div>
      {/* Right */}
      <h1>Login</h1>
    </div>
    </div>
  )
}

export default Header;