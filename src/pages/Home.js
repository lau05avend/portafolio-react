import "./Home.scss";
import home from "./HomeImg.svg"
import Button from '@mui/material/Button';
import {
    Link
  } from "react-router-dom";

function Home(){
    return (
        <div className="bodyy">
            <div className="container">
                <div className="content-C">
                    <h1>Pagina Principal</h1> <br />
                    <ul>
                        <li>
                            <Button variant="outlined" color="error"><Link to="/portafolio" >Portafolio</Link></Button>
                        </li>
                    </ul>
                </div>
                <div>
                    <img className="imgg" src={home} />
                </div>
            </div>
        </div>
    );
}

export default Home;
