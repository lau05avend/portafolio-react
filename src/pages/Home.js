
import {
    Link
  } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Pagina Principal</h1>
            <ul>
                <li><Link to="/portafolio" >Portafolio</Link></li>
            </ul>
        </div>
    );
}

export default Home;
