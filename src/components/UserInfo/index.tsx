import { useGetUser, connect } from "@/hooks/userHooks"
import { IPropChild } from "@/utils/types";

const UserInfo = ({ children }: IPropChild) => {
    useGetUser();

    return (
      <div>{ children }</div>
    )
}

export default connect(UserInfo);