import "./blogSummary.css"
import {Link} from "react-router-dom";

function BlogSummary({title, writer, summary, response, share}) {
    return (
        <article className="summary-wrapper">
            <div className="title-wrapper">
                <Link to="/blogpost/${blog.id}"><h3 className="title">{title}</h3></Link>
                <h3 className="writer"> (door {writer})</h3>
            </div>
            <p>{summary}</p>
            <p className="response">{response} keer gelezen - {share} keer gedeeld</p>
        </article>
    );
}

export default BlogSummary;