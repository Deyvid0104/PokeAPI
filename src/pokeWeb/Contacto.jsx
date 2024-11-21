import React from 'react';
import { useParams } from 'react-router-dom';

const Contacto = () => {
  const { username } = useParams();
  const userInfo = {
    name: username,
    avatar: `https://api.adorable.io/avatars/285/${username}.png`,
    info: "Información relevante sobre el usuario."
  };

  return (
    <div>
      <h2>Contacto</h2>
      <h3>{userInfo.name}</h3>
      <img src={userInfo.avatar} alt="Avatar" />
      <p>{userInfo.info}</p>
    </div>
  );
};

export default Contacto;