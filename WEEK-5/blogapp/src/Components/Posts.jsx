import { useEffect, useState } from "react";
import { getPosts } from "../Services/PostService";

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getPosts()
            .then((response) => {
                setPosts(response.data.slice(0, 10));
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Blog Posts</h1>

            {posts.map((post) => (
                <div
                    key={post.id}
                    style={{
                        border: "1px solid gray",
                        marginBottom: "15px",
                        padding: "15px",
                        borderRadius: "8px"
                    }}
                >
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;