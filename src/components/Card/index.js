import React from 'react';

import TopInfo from './TopInfo';
import CentralInfo from './CentralInfo';
import BototmInfo from './BottomInfo';

import './style.css';

export default function Card({data}) {
  const topInfoData = {
    nome: data.nome,
    nota: data.nota,
    img: data.imagem.url,
    materias: data.materia
  };

  return (
    <div className="professor-info-container"> 
      <TopInfo data={topInfoData}/>
      <CentralInfo curriculo={data.curriculo}/>
      <BototmInfo bairro={data.bairro}/>
    </div>
  );
}