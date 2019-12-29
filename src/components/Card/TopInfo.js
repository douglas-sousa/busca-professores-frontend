import React from 'react';

import './style.css';

//data é um objeto vindo do componente Card
export default function TopInfo({data}) {
  return (
    <div className="info-gerais">

      <div className="info-gerais__esquerda">
        <img
          className="img-professor"
          src={data.img}
          alt="Foto do professor"
        />
      </div>

      <div className="info-gerais__centro">
        <p className="nome-professor">{data.nome}</p>
        <p className="intro-disciplina">Disciplinas:</p>
        <div className="nome-disciplina">
          {data.materias.map((materia, index) => (
            <p 
              className="nome-disciplina__item"
              key={index}
            >
              {materia}
            </p>
          ))}
        </div>
      </div>

      <div className="info-gerais__direita">
        <p className="avaliacao-professor">{data.nota}</p>
        <i className="fas fa-star"></i>
      </div>

    </div>
  );
}