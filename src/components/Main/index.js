import React, { useState, useEffect } from 'react';

import Card from '../Card';
import Search from '../Search';

import './style.css';

export default function Main() {
  const [teachers, setTeachers] = useState([]);

  return (
    <>
      <Search setTeachers={setTeachers}/>

      <div className="card-container" data-testid="card-container">
        {teachers.map(teacher => <Card key={teacher.objectId} data={teacher} />)}
      </div>
    </>
  );
}