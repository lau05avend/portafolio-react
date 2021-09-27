import Lateral from "../components/Lateral/Lateral";
import Content from "../components/Content/Content";
import { Link } from "react-router-dom";

function Portafolio(){
    return(
        <div className="cv">
            <div className="back">
                <Link to="/home" className="backPortafolio">
                <i class="far fa-arrow-alt-circle-left"></i>Volver</Link>
            </div>
            <Lateral />
            <Content />
        </div>
    );
}

export default Portafolio;
