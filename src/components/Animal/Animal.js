import React from 'react';

export default function Animal(props) {
  return (
    <div className='animal'>
      <img src={`${process.env.PUBLIC_URL}/${props.type}.svg`} />
      <span className='name'>Name</span>
    </div>
  );
}
