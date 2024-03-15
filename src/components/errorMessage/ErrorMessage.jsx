import {Link} from "react-router-dom";

function ErrorMessage() {
    return (
        <div>Oh nee! Er ging iets fout. Probeer de pagina opnieuw te laten of <Link to="/">keer terug naar de homepagina</Link></div>
    );
}

export default ErrorMessage;