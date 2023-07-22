import { useNavigate } from "react-router-dom";

// Custom Imports
import { useUserContext } from "@/hooks/userHooks";
import { AUTH_TOKEN } from "@/utils/constant";

const MiniPorfile = () => {

    const { store } = useUserContext();
    const nav = useNavigate()

    const logoutHandler = () => {
      localStorage.setItem(AUTH_TOKEN, "");
      nav("/login")
    }

    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src={`https://i.pravatar.cc/150?img=${store.avatar}`} alt="" className="h-16 border p-[2px] rounded-full cursor-pointer"/>
            <div className="flex-1 ml-4">
                <h2 className="font-bold">{ store.name }</h2>
                <h3 className="text-sm text-gray-400">{ store.desc }</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm" onClick={() => logoutHandler()}>Signout</button>
        </div>
    )
}

export default MiniPorfile;