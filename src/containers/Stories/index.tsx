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
        }
    ]
    
    console.log(storyUsers)
    return (
        <div>
            {
                storyUsers.map((story)=>(
                    <Story username={story.username} img={story.img} key={story.id}/>
                ))
            }
        </div>
    )
}

export default Stories;