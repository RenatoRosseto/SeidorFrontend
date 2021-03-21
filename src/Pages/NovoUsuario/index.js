import React, { useState } from 'react';

import Input from '../../Components/Input'
import Button from '@material-ui/core/Button';
import Select from '../../Components/Select'

import Header from '../../Components/Header'

import './styles.scss'
import {
  statusUsu
} from './api.js'

function NovoUsuario() {
  const [filtrarPor, setFiltrarPor] = useState({})
  const [termoFiltro, setTermoFiltro] = useState('')
  
  function atualizaTermoFiltro(e) {
    setTermoFiltro(e)
  }

  function aplicaFiltros(e) {
    console.log("Aplicando filtros")
    console.log("Filtrando por: ")
  }

  function atualizaFiltro(e) {
    setFiltrarPor(e.value)
  }

  return (
    <>
      <Header titulo="Cadastro de novo usuário" btnTipo="novoUsuario" />
      <div className="containerNovoUsuario">
        <h2>Entre com os dados do novo usuário</h2>
        <Input titulo="Cargo" minhaFunc={atualizaTermoFiltro} />
        <Input titulo="Cpf" minhaFunc={atualizaTermoFiltro} />
        <Input titulo="Nome" minhaFunc={atualizaTermoFiltro} />
        <Input titulo="UfNasc" minhaFunc={atualizaTermoFiltro} />
        <Input titulo="Salario" minhaFunc={atualizaTermoFiltro} />
        <Select titulo="Status" lista={statusUsu} minhaFunc={atualizaFiltro} />
        <Button variant="contained" color="primary" onClick={aplicaFiltros}>
          Cadastrar
        </Button>
      </div>
    </>
  );
}

export default NovoUsuario;
