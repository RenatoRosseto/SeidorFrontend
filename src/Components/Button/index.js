import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

export default function Btn(props) {

  return (
    <>
      <Link to={props.tipo === "home" ? "/novo-usuario" : "/"}>
        <Button variant="contained" color={props.tipo === "home" ? "secondary" : "primary"}>
          {props.tipo === "home" ? "Novo usuário" : "Home" }
        </Button>
      </Link>
    </>
  );
}