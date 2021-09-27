import './Lateral.scss';
import * as React from 'react';
import Dialogo from "../Dialog/Dialog";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Icon from '@mui/material/Icon';


const theme = createTheme({
    palette: {
      modales: {
          main: '#458476'
      },
    },
});

function Lateral(){

    const [openEdu, setOpenEdu] = React.useState(false);
    const [openSkills, setOpenSkills] = React.useState(false);
    const handleOpenEdu = () => { setOpenEdu(true) };
    const handleCloseEdu = () => setOpenEdu(false);
    const handleOpenSk = () => { setOpenSkills(true) };
    const handleCloseSk = () => setOpenSkills(false);

    return (
        <div className="infoLateral">
            <div className="container-header"></div>
            <div className="titles">
                <h1>Laura Avendaño</h1>
                <span>Desarrollador Back-end</span>
            </div>
            <div className="content">
                <div className="section">
                    <h3>EDUCACIÓN</h3>
                    <div className="designT"></div>
                    <div className="itemEd">
                        <h4>Grado Primaria</h4>
                        <u>2008 - 2013</u>
                        <p>Colegio Celestin Freinet | Bogotá, Colombia</p>
                    </div>
                    <div className="itemEd">
                        <h4>Bachillerato Academico</h4>
                        <u>2013 - 2020</u>
                        <p>Colegio Celestin Freinet | Bogotá, Colombia</p>
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained"  color="modales" size="small" onClick={handleOpenEdu}
                                startIcon={<Icon baseClassName="fas" className="fa-plus-circle" fontSize="small" />} >
                            Ver Más
                        </Button>
                    </ThemeProvider>
                    <br /><br/>
                </div>
                <div className="section">
                    <br /><br/>
                    <h3>HABILIDADES</h3>
                    <div className="designT"></div>
                    <div className="rangeDiv">
                        <span>Java</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "72%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>CSS</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "58%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>PHP</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "78%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>JavaScript</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "45%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>React</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "38%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <br />
                    <ThemeProvider theme={theme}>
                        <Button variant="contained"  color="modales" size="small" onClick={handleOpenSk}
                                startIcon={<Icon baseClassName="fas" className="fa-plus-circle" fontSize="small" />} >
                            Ver Más
                        </Button>
                    </ThemeProvider>
                    <br /><br />
                </div>
                <div className="section">
                    <br /><br/>
                    <h3>IDIOMAS</h3>
                    <div className="designT"></div>
                    <div className="rangeDiv">
                        <span>Ingles</span><br />
                        <div className="range">
                            <div className="range-porcent Ladng" style={{ width: "73%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>Frances</span><br />
                        <div className="range">
                            <div className="range-porcent Ladng" style={{ width: "12%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <br /><br/>
                </div>
            </div>

            <Dialogo  open={openEdu} handleClose={handleCloseEdu} title='Educación'>
                        <div className="section">
                            <div class="itemEd">
                                <h4>Grado Primaria</h4>
                                <u>2008 - 2013</u>
                                <p>Colegio Celestin Freinet | Bogotá, Colombia</p>
                            </div>
                            <div class="itemEd">
                                <h4>Bachillerato Academico</h4>
                                <u>2013 - 2020</u>
                                <p>Colegio Celestin Freinet | Bogotá, Colombia</p>
                            </div>
                            <div class="itemEd">
                                <h4>Técnico en Programación de Software</h4>
                                <u>2019 - 2020</u>
                                <p>SENA | Bogotá, Colombia</p>
                            </div>
                            <div class="itemEd">
                                <h4>Tecnólogo en Análisis y Desarrollo de Sistemas de la Información </h4>
                                <u>2021 - Actualidad</u>
                                <p>SENA | Bogotá, Colombia</p>
                            </div>
                        </div>
            </Dialogo>
            <Dialogo  open={openSkills} handleClose={handleCloseSk} title='Habilidades'>
                <div className="dialogSk">
                    <br />
                    <h3>Lenguajes de Programación</h3>
                    <div className="rangeDiv">
                        <span>Java</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "72%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>PHP</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "78%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>JavaScript</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "45%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>React</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "38%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <br />
                    <h3>Base de Datos</h3>
                    <div className="rangeDiv">
                        <span>SQL Server</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "58%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>MySQL Workbench</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "68%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <br/>
                    <h3>Diseño</h3>
                    <div className="rangeDiv">
                        <span>CSS</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "58%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <div className="rangeDiv">
                        <span>Illustraitor</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "38%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                    <h3>Otros</h3>
                    <div className="rangeDiv">
                        <span>Microsoft Office</span><br />
                        <div className="range">
                            <div className="range-porcent" style={{ width: "38%" }} data-porcent="45" ></div>
                        </div>
                    </div>
                </div>
            </Dialogo>
        </div>
    );

}

export default Lateral;