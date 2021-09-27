import "./Content.scss";
import treball from "./project.PNG";
import Header from "../Header/Header";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { ClassNames } from "@emotion/react";

function Content() {
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
            conocimientos constantemente. De modo que, siempre busco alinearme a
            los objetivos, requerimientos y perfil de la empresa en la que me
            encuentre. Soy una persona emprendedora y dedicada que no se rinde
            fácilmente, aportando y contribuyendo positivamente cuando es
            requerido; asimismo, caracterizada por ser detallista,
            perfeccionista y trabajadora. Siempre estoy en la búsqueda de nuevas
            oportunidades y aprendizaje, por lo que aun continúo aprendiendo,
            siendo autodidacta cada día, e informándome sobre nuevas
            tecnologías, y en general de la industria del software y los datos.
          </p>
        </div>

        {/* PORYECTOS */}
        <div className="sectionContent">
          <br />
          <h1>Proyectos</h1>
          <div className="titler"></div>
          <Card sx={{ maxWidth: 310 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={treball}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Treball
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Sistema de información para control y seguimiento de actividades y novedades en la planeación de obras. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        
        {/* EXPERIENCIA LABORAL */}
        <div className="sectionContent">
          <br />
          <h1>Experiencia Laboral</h1>
          <div className="titler"></div>
          <div className="timeline">
            <Timeline align="left" className={ClassNames.timeline}>
              <TimelineItem>
                <TimelineOppositeContent
                  style={{ flex: 0.1 }}
                  color="text.secondary">
                  2019 - 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="itemEx">
                    <h4>Proyecto Neurología</h4><br />
                    <u>2019 - 2020</u>
                    <p>Durante el Técnico en Programación de Software, desarrollé un sistema de información para un consultorio de neurología,
                      para el control de citas médicas e historial clínico.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>

            </Timeline>
          </div>
        </div>
        {/* <div className="sectionContent">
          <h1>Referencias Laborales</h1>
          <div className="titler"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Content;
