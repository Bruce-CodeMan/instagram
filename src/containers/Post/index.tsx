import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, FaceSmileIcon } from "@heroicons/react/24/outline";



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

            {/* Button */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <HeartIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out"/>
                    <ChatBubbleOvalLeftEllipsisIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out"/>
                </div>
                <BookmarkIcon className="h-7 hover:scale-125 transition-transform duration-200 ease-out"/>
            </div>

            {/* Post comments */}
            <p className="p-5 truncate">
                <span className="font-bold mr-5">{ username }</span>
                <span>{ caption }</span>
            </p>

            {/* Post Input box */}
            <form action="" className="flex items-center p-4 space-x-4">
                <FaceSmileIcon className="h-7"/>
                <input type="text" placeholder="Enter your comments" className="border-none flex-1"/>
                <button className="text-blue-500 font-bold">Post</button>
            </form>
        </div>
    )
}

export default Post;