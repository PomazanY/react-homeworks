import { Link } from "react-router-dom";
import { posts } from "../../data/posts";

const PostList = () => {
    const elements = posts.map(item => (
        <li key={item.id}>
            <Link to={`/posts/${item.id}`}> {item.name} </Link>
        </li>
    ))

    return (
        <ul>
         {elements}
        </ul>
    )
}
export default PostList;