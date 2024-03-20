import {Link} from "react-router-dom";



function Succes( {newPostID} ) {

const newBlogURL = `/blogpost/${newPostID}`

        // const link = `/blogpost/${newPostID}`
    return (
        <div>
            <h2>Je blog is geplaatst</h2>
           <Link to={newBlogURL}>Bekijk nieuw blog</Link>

        </div>
    );
}

export default Succes;