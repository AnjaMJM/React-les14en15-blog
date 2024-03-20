// https://dev.to/stanlisberg/react-router-a-beginners-guide-to-useparams-hook-38pj
import "./blogPost.css"
import {useParams} from "react-router-dom";
import {toDutchDate} from "../../helpers/toDutchDate.js";
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";



function BlogPost({data}) {
    const {id} = useParams()


    const navigate = useNavigate()
        const handleClick = () => {
        navigate(-1)

    }
    return (
        <div>
            {data
                .filter((blog) => blog.id.toString() === id) //De id in de data is een nummer, terwijl de url een string verwacht. Daarom omzetten naar string
                .map(({title, subtitle, author, created, content, readTime}, index) => (
                    <div key={index} className="blog-wrapper">
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                        <p>Geschreven door {author} op {toDutchDate(created)}</p>
                        <p className="read-time">Leestijd: {readTime} minuten</p>
                        <p>{content}</p>
                        <Button
                            btnType="button"
                            handleClick={handleClick}
                            btnName="Keer terug naar overzicht"
                        />
                    </div>
                ))}
        </div>
    );
}

export default BlogPost;