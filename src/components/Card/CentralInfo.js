import React from 'react';

import './style.css';

//curriculo é uma string vinda do componente Card
export default function CentralInfo({curriculo}) {
  return (
    <div className="apresentacao-curriculo">
      <p className="intro-curriculo">Currículo</p>
      <p className="conteudo-curriculo" data-testid="conteudo-curriculo">{curriculo}</p>
    </div>
  );
}