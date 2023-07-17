import Post from "../Post";

const Posts = () => {

    const posts = [
        {
            id: 1,
            username: "Bruce",
            userImg: "https://i.pravatar.cc/150?img=1",
            img: "https://images.pexels.com/photos/16790135/pexels-photo-16790135/free-photo-of-fog-over-bare-trees-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            caption: "Nice picture"
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/16416071/pexels-photo-16416071/free-photo-of-iced-coffee-and-orange-juice-in-glasses-with-straws.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            username: "James",
            userImg: "https://i.pravatar.cc/150?img=2",
            caption: "Thank you"
        }
    ]

    return (
        <div>
            {
                posts.map((post) => (
                    <Post 
                        key={post.id} 
                        username={post.username} 
                        img={post.img} 
                        userImg={post.userImg} 
                        caption={post.caption}    
                    />
                ))
            }
        </div>
    )
}

export default Posts;