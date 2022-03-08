import React from 'react';
import Animal from '../Animal/Animal';
import './Main.css';
import { animals } from '../../data';
import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} />
      ))}

    </main>
  );
}
