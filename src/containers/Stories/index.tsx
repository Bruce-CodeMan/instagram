import Story from "@/containers/Story"

const Stories = () => {

    const storyUsers = [
        {
            username: "Bruce",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 1
        },
        {
            username: "James",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 2
        },
        {
            username: "Lebron",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 3
        },
        {
            username: "Tom",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 4
        },
        {
            username: "Bruce",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 5
        },
        {
            username: "James",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 6
        },
        {
            username: "Lebron",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 7
        },
        {
            username: "Tom",
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id: 8
        }
    ]
    
    console.log(storyUsers)
    return (
        <div className="flex space-x-2 p-6 bg-gray-200 mt-8 border-white border overflow-x-scroll scrollbar-none">
            {
                storyUsers.map((story)=>(
                    <Story username={story.username} img={story.img} key={story.id}/>
                ))
            }
        </div>
    )
}

export default Stories;