import "./overview.css"
import blogposts from "../../constants/data.json"
import BlogSummary from "../../components/blogSummary/BlogSummary.jsx";

function Overview() {
    console.log(blogposts)
    return (
        <div className="overview">
            {blogposts.map(({author, title, subtitle, comments, shares}) => {
                <BlogSummary
                    title={title}
                    writer={author}
                    summary={subtitle}
                    response={comments}
                    share={shares}
                />
            })}
        </div>

    );
}

export default Overview;
