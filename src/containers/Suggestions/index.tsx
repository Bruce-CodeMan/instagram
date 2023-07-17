const Suggections = () => {

    const storyUsers = [
        {
            username: "Bruce",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 1
        },
        {
            username: "James",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 2
        },
        {
            username: "Lebron",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 3
        },
        {
            username: "Tom",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 4
        },
        {
            username: "Bruce",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 5
        },
        {
            username: "James",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 6
        },
        {
            username: "Lebron",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 7
        },
        {
            username: "Tom",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle: "IT",
            id: 8
        }
    ]

    return (
        <div className="mt-4 ml-10">
            <div className=" flex justify-between">
                <h3 className="font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600">See all</button>
            </div>
            {
                storyUsers.map((user) => (
                    <div className="flex items-center justify-between mt-3">
                        <img className="h-10 rounded-full border p-[2px]" src={user.img} alt="" />
                        <div className="flex flex-col flex-1 ml-4">
                            <h2 className="font-semibold text-sm">{user.username}</h2>
                            <h3 className="text-sm text-gray-400 truncate 2-[230px]">{user.jobTitle}</h3>
                        </div>
                        <button className="font-semibold text-blue-400 text-sm">Follow me</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggections;