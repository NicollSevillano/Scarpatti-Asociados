import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Gestion from '../img/Capacitaciones/Gestion.png'
import capitalH from '../img/Capacitaciones/capitalH.png'
import styles from './Capacitaciones.module.css'

export default function ImgMediaCard() {
    return (
        <div className={styles.cardContent} id={styles.content}>
            <h2>Capacitaciones</h2>
            <div className={styles.cardArea}>
                <Card sx={{ maxWidth: 345, height: '30em' }} id={styles.content}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={Gestion}
                    />
                    <CardContent className={styles.content}>
                        <Typography gutterBottom variant="h5" component="div" className={styles.tittle}  id={styles.content}>
                            Formación para la Gestión
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className={styles.contentList} id={styles.content}>
                            <ul className={styles.list}>
                                <li>Marketing y ventas: Negociación comercial.</li>
                                <li>Administración estratégica: Matriz de rentabilidad.</li>
                                <li>Tablero de Comando Integral.</li>
                                <li>Protocolo de Empresas.</li>
                                <li>Creatividad e Innovación.</li>
                                <li>Manejo de Crisis.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, height: '30em' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={capitalH}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" className={styles.tittle2} component="div" id={styles.content}>
                            Formación del Capital Humano
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id={styles.content}>
                            <ul className={styles.list}>
                                <li>Selección de Mandos Medios y Gerentes.</li>
                                <li>Análisis, descripción y valoración de Puestos.</li>
                                <li>Evaluación del Desempeño.</li>
                                <li>Gestión por Competencias.</li>
                                <li>Reuniones Efectivas.</li>
                                <li>Ceremonial y Protocolo.</li>
                                <li>Administración del Tiempo.</li>
                                <li>Relaciones Laborales.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}