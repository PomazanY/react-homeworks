import { posts } from '../../data/posts';

import { useParams, useNavigate } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const post = posts.find(item => item.id === Number(id));

    const navigate = useNavigate();

    if (!post) return <p>Post not found</p>;

    const goBack = () => {
        navigate(-1)

    }

    return (
        <>
            <h2>Post: {post.name} </h2>
            <p>Content: {post.content}</p>
            <button onClick={goBack}>Back</button>
        </>
    )
}
export default Post;