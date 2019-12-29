import React from 'react';

import './style.css';

//bairro é uma string vinda do componente Card
export default function BottomInfo({bairro}) {
  return (
    <div className="local-info">
      <i className="fas fa-map-marker-alt"></i>
      <p className="cidade" data-testid="cidade">{bairro}</p>
    </div>
  );
}