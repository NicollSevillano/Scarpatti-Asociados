import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Efe from '../img/EfE.png';
import Gp from '../img/Gp.jpg';
import lean from '../img/lean.png';
import Sg from '../img/Sg.png';
import styles from './Carousel.module.css';

function CarouselMain() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }; 

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.content}>
      <Carousel.Item>
        <img style={{height: '40em', width: '83em'}} id={styles.Img} src={Efe}/>
        <Carousel.Caption>
          <h3 style={{backgroundColor: 'white', color: 'black'}} className={styles.h3}>Eficiencia Energética</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '40em', width: '83em'}} id={styles.Img} src={Gp} />
        <Carousel.Caption>
          <h3 style={{backgroundColor: 'white', color: 'black'}} className={styles.h3}>Gestión de Proyectos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '40em', width: '83em'}} id={styles.Img} src={lean} />
        <Carousel.Caption>
          <h3 style={{backgroundColor: 'white', color: 'black'}} className={styles.h3}>Lean Manufacturing</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '40em', width: '83em'}} id={styles.Img} src={Sg} />
        <Carousel.Caption>
          <h3 style={{backgroundColor: 'white', color: 'black'}} className={styles.h3}>Sistemas de gestión</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;