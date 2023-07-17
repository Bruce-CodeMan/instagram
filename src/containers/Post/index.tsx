import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";


interface IProps {
    username: string;
    userImg: string;
    img: string;
    caption: string;
}

const Post = ({ username, userImg, img, caption }: IProps) => {
    return (
        <div className="bg-gray-200 my-7">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImg} alt="" className="h-12 rounded-full object-cover border p-1"/>
                <p className="font-bold flex-1">{ username }</p>
                <EllipsisHorizontalIcon className="h-5"/>
            </div>

            {/* Image */}
            <img src={img} alt="" className="object-cover w-full"/>
        </div>
    )
}

export default Post;