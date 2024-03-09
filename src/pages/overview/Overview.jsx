import "./overview.css"
import posts from "../../constants/data.json"
import BlogSummary from "../../components/blogSummary/BlogSummary.jsx";


function Overview() {
    console.log(posts)
    console.log(posts[0].author)

    return (
        <div className="overview-wrapper">
            <h2 className="overview-title">Laat je met deze {posts.length} blogs meenemen op een reis rond de wereld</h2>

            <div>
                {posts.map(({id, title, author, subtitle, comments, shares}) => {
                    return <BlogSummary
                        key={id}
                        title={title}
                        writer={author}
                        summary={subtitle}
                        response={comments}
                        share={shares}
                    />
                })}
            </div>
        </div>
    );
}

export default Overview;
