import './Error.scss';
import { useHistory } from "react-router-dom";

function Error404(){
    let history = useHistory();
    return(
        <div className="background">
            <h1>404</h1>
            <h3>página no encontrada</h3>
            <div className="container-error">
                <div className="ghost-copy">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                </div>
                <div className="ghost">
                    <div className="face">
                    <div className="eye"></div>
                    <div className="eye-right"></div>
                    <div className="mouth"></div>
                </div>
            </div>
            <div className="shadow"></div>
            </div>
            <div className="bottom">
                <div className="buttons">
                    <button className="btn" onClick={history.goBack}>Atrás</button>
                    <button className="btn">Home</button>
                </div>
            </div>
        </div>
    );
}

export default Error404;
