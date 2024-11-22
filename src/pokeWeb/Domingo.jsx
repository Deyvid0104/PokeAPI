import React from 'react';
import { Card } from 'react-bootstrap';

const Domingo = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="/domingo.png" alt="Domingo" />
        <Card.Body>
          <Card.Title>Domingo</Card.Title>
          <Card.Subtitle>
            Docente de IAW
          </Card.Subtitle>
          <Card.Text>
            <spam>Correo:</spam> domingolopez.instituto@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Domingo;