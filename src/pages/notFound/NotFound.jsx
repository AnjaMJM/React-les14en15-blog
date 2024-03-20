import { Link} from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>Whoops! De pagina die je zocht lijkt niet te bestaan</h2>
            <Link to="/">Keer terug naar de homepagina</Link>
        </div>
    );
}

export default NotFound;