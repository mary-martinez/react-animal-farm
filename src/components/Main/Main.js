import React from 'react';
import Animal from '../Animal/Animal';
import './Main.css';
import { animals } from '../../data';

export default function Main() {
  return (<div>
    {animals.map((animal) => (
      <Animal key={animal.name} name={animal.name} type={animal.type} says={animal.says} />
    ))}

  </div>);
}
