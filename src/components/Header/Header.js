import Icon from './idk.jpg';
import perfil from './img1.png';
import './Header.scss';

function Header(){
    return (
        <div>
            <header className="header">
                <div className="foto">
                    <img alt="hola" src={perfil} />
                </div>
                <div className="contact">
                    <div>
                        <i class="red fas fa-envelope-square"></i> <span>lvavendano6@gmail.com</span>  <br />
                        <i class="red fas fa-phone-square"></i> <span>+57 350 478 2635</span> <br />
                        <i class="red fab fa-linkedin"></i> <a target="_blank" href="https://www.linkedin.com/in/laura-valentina-avenda%C3%B1o-tibocha-2592a6206/" rel="noreferrer">Linkedin</a> <br />
                        <i class="red fab fa-github-square"></i> <a target="_blank" href="https://github.com/lau05avend" rel="noreferrer">GitHub</a> <br />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;