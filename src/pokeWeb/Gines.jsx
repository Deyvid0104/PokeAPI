import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './styles/contacto.module.css';

const Gines = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/gines.png" alt="Gines" />
        <Card.Body>
          <Card.Title className={styles.nombre}>Gines</Card.Title>        
          <hr />
          <Card.Subtitle>
            Docente de SRI
          </Card.Subtitle>
          <Card.Text>
            <spam className={styles.correo}>Correo:</spam> gines.esteban@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Gines;