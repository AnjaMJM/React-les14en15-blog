import "./blogPost.css"
import {useParams} from "react-router-dom";
import posts from "../../constants/data.json"
// import {toDutchDate} from "../../helpers/toDutchDate.js";

function BlogPost() {
    console.log(posts)
    // https://dev.to/stanlisberg/react-router-a-beginners-guide-to-useparams-hook-38pj
    const {id} = useParams()
    return (
        <div>
            <p>{id}</p>
            {/*<h2>{title}</h2>*/}
            {/*<h3>{subtitle}</h3>*/}
            {/*<p>Geschreven door {author} op {toDutchDate(posts[{id}].created)}</p>*/}
            {/*<p>{content}</p>*/}

        </div>
    );
}

export default BlogPost;