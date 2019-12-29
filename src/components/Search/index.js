import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css';

//setTeachers é uma função do useState vinda do componente Main
export default function Search({setTeachers}) {
  const [value, updateValue] = useState('');
  const handleInputChange = event => {
    updateValue(event.target.value);
  }

  const fetchingTeachers = () => {
    //Caso value estaja vazio, será feito um GET
    if(!!value) {
      axios.post('http://192.168.1.9:3000/professores', {
        campoNome: 'nome', profNome: value
      })
        .then(res => {
          setTeachers(res.data.professor);
        })
        .catch(err => {
          console.warn(err)
        })
    }

    /**
     * A ideia a princípio era mostrar a página em branco, mas para mostrar
     * quais opções de professores estão disponíveis, o cliente irá fazer
     * uma requisição GET para listar todos os professores quando o input
     * estiver vazio
     */
    else {
      axios.get('http://192.168.1.9:3000/professores')
        .then(res => {
          setTeachers(res.data.professor);
        })
        .catch(err => {
          console.warn(err)
        })
    }
  }

  useEffect(() => {
    fetchingTeachers()
    /**
     * Após a primeira execução da callback registrada no useEffect,
     * a callback só é reexecutada caso o valor do segundo parâmetro mude.
     */
  }, [value]);

  return (
    <div className="search-elements">
      <i className="fas fa-search"></i>
      <input 
        data-testid="teacher-input"
        className="teacher-input" 
        placeholder="Procure um professor da plataforma pelo nome"
        onChange={handleInputChange}
        value={value}
      />
    </div>
  );
}