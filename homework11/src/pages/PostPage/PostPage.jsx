import Post from "../../components/Post/post";

import { useParams } from "react-router-dom";

const PostPage = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Single post</h1>
            <Post id={id} />

        </>
    )
}
export default PostPage;