import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './styles/contacto.module.css';

const Domingo = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/domingo.png" alt="Domingo" />
        <Card.Body>
          <Card.Title className={styles.nombre}>Domingo</Card.Title>
          <hr />
          <Card.Subtitle>
            Docente de IAW
          </Card.Subtitle>
          <Card.Text>
            <spam className={styles.correo}>Correo:</spam> domingolopez.instituto@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Domingo;