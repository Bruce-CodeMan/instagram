export interface IPropChild {
    children: React.ReactNode;
}

/**
 * 用户
 */
export interface IUser {
    id: string;
    tel: string;
    name: string;
    refetchHandler?: ()=>void;
    desc: string;
    avatar: string;
}