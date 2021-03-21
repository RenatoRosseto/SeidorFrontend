import React from 'react';

import Button from '../Button'

import './styles.scss'

function Header(props) {
  return (
    <>
      <div className="containerHeader">
        <h1>{props.titulo}</h1>
        <Button tipo={props.btnTipo} />
      </div>
    </>
  );
}

export default Header;
