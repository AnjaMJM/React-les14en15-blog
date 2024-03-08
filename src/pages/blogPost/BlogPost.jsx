import "./blogPost.css"
import {useParams} from "react-router-dom";

function BlogPost() {

    const {id} = useParams()
    return (
        <div>individuele blogpost {id}</div>
    );
}

export default BlogPost;