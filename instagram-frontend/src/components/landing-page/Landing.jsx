import React from 'react';
import Landing from '../sidebar/Sidebar';
import Card from '../card';

const Landing = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/getposts',
                {
                    headers: {
                        Authorization: `Bearer ${authtoken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            setPosts(response.data.posts);
        } catch (error) {
            console.log('Error fetching posts:', error);
        }
    };

    return (
        <div>
            <Sidebar />
            <ul className="cards">
                {posts.map((post) => (
                    <Card post_id={post.id} key={post.id} image_url={post.image_url} likes_count={post.likes_count} />
                ))}
            </ul>
        </div >

    );
};

export default Landing;