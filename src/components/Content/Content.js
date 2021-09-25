import './Content.scss';
import Header from "../Header/Header";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';

function Content(){
    return (
      <div className="content-body">
        <Header />
        <div className="centerC">
          <div className="sectionContent">
            <h1>Sobre Mí</h1>
            <div className="titler"></div>
            <p>
              Mi objetivo principal es desarrollarme profesionalmente,
              evolucionando en el área en la que me especializo y mejorando mis
              conocimientos constantemente. De modo que, siempre busco alinearme
              a los objetivos, requerimientos y perfil de la empresa en la que
              me encuentre. Soy una persona emprendedora y dedicada que no se
              rinde fácilmente, aportando y contribuyendo positivamente cuando
              es requerido; asimismo, caracterizada por ser detallista,
              perfeccionista y trabajadora. Siempre estoy en la búsqueda de
              nuevas oportunidades y aprendizaje, por lo que aun continúo
              aprendiendo, siendo autodidacta cada día, e informándome sobre
              nuevas tecnologías, y en general de la industria del software y
              los datos.
            </p>
          </div>
          <div className="sectionContent">
            <h1>Proyectos</h1>
            <div className="titler"></div>
          </div>
          <div className="sectionContent">
            <h1>Experiencia Laboral</h1>
            <div className="timeline">
            <Timeline className={ClassNames.timeline}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <div className="itemEx">
                    <h4>Grado Primaria</h4>
                    <u>2008 - 2013</u>
                    <p>Colegio Celestin Freinet | Bogotá, Colombia</p>
                </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
            </Timeline>
            </div>
            <div className="titler"></div>
            <div className="itemEd">
              <h4>Grado Primaria</h4>
              <u>2008 - 2013</u>
              <p>Colegio Celestin Freinet | Bogotá, Colombia</p>
            </div>
          </div>
          <div className="sectionContent">
            <h1>Referencias Laborales</h1>
            <div className="titler"></div>
          </div>
        </div>
      </div>
    );
}

export default Content;
