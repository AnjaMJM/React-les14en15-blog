import "./overview.css"
import {Link} from "react-router-dom";


function Overview({data}) {

    return (
        <div className="overview-wrapper">
            <h2 className="overview-title">Laat je met deze {data.length} blogs meenemen op een reis rond de wereld</h2>

            <div>
                {data.map(({id, title, author, subtitle, comments, shares}) => {
                    return <article className="summary-wrapper" key={id}>
                        <div className="title-wrapper">
                            <Link to={`/blogpost/${id}`}><h3 className="title">{title}</h3></Link>
                            <h3 className="writer"> (door {author})</h3>
                        </div>
                        <p>{subtitle}</p>
                        <p className="response">{comments} keer gelezen - {shares} keer gedeeld</p>
                    </article>
                })}
            </div>
        </div>
    );
}

export default Overview;
