import Lateral from "../components/Lateral/Lateral";
import Content from "../components/Content/Content";

function Portafolio(){
    return(
        <div className="cv">
            <a href="#" className="backPortafolio"><i class="far fa-arrow-alt-circle-left"></i>Volver</a>
            <Lateral />
            <Content />
        </div>
    );
}

export default Portafolio;
