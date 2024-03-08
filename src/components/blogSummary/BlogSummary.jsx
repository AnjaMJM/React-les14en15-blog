import "./blogSummary.css"

function BlogSummary({title, writer, summary, response, share}) {
    return (
        <article className="summary-wrapper">
            <div className="title-wrapper">
                <h3 className="title">{title}</h3>
                <h3 className="writer"> (door {writer})</h3>
            </div>
            <p>{summary}</p>
            <p>{response} keer gelezen - {share} keer gedeeld</p>
        </article>
    );
}

export default BlogSummary;