import Card from 'react-bootstrap/Card';
import styles from './Cards.module.css';

function cards() {
  return (
    <div className={styles.card}>
      <div>
        <Card style={{ width: '18rem', height: '13rem' }} className={styles.content}>
          <Card.Body className={styles.cardBody}>
            <Card.Title style={{fontSize: '1.8rem', fontWeight: '600'}}>VISIÓN</Card.Title>
            <Card.Text style={{fontSize: '18px'}}>
              Ser una consultora valorada por la seriedad y excelencia  de los servicios prestados a los clientes.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '18rem', height: '13rem' }} className={styles.content}>
          <Card.Body className={styles.cardBody}>
            <Card.Title style={{fontSize: '1.8rem', fontWeight: '600'}}>MISIÓN</Card.Title>
            <Card.Text style={{fontSize: '18px'}}>
              Brindar soluciones para el crecimiento de las organizaciones y el desarrollo de las personas.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default cards;