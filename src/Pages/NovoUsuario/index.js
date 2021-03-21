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
  const [dataCad, setDataCad] = useState('')
  const [cargo, setCargo] = useState('')
  const [cpf, setCpf] = useState('')
  const [nome, setNome] = useState('')
  const [ufNasc, setUfNasc] = useState('')
  const [salario, setSalario] = useState('')
  const [status, setStatus] = useState({})

  function atualizaCargo(e) {
    setCargo(e)
  }

  function atualizaCPF(e) {
    setCpf(e)
  }

  function atualizaNome(e) {
    setNome(e)
  }

  function atualizaUfNasc(e) {
    setUfNasc(e)
  }
  
  function atualizaSalario(e) {
    setSalario(e)
  }

  function atualizaStatus(e) {
    setStatus(e.value)
  }

  function aplicaFiltros(e) {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    setDataCad(date + "/" + month + "/" + year)

    console.log("Cadastrando usuario")
    console.log(dataCad)
    console.log(cargo)
    console.log(cpf)
    console.log(nome)
    console.log(ufNasc)
    console.log(salario)
    console.log(status.name)
  }

  return (
    <>
      <Header titulo="Cadastro de novo usuário" btnTipo="novoUsuario" />
      <div className="containerNovoUsuario">
        <h2>Entre com os dados do novo usuário</h2>
        <Input titulo="Cargo" minhaFunc={atualizaCargo} />
        <Input titulo="Cpf" minhaFunc={atualizaCPF} />
        <Input titulo="Nome" minhaFunc={atualizaNome} />
        <Input titulo="UfNasc" minhaFunc={atualizaUfNasc} />
        <Input titulo="Salario" minhaFunc={atualizaSalario} />
        <Select titulo="Status" lista={statusUsu} minhaFunc={atualizaStatus} />
        <Button variant="contained" color="primary" onClick={aplicaFiltros} >
          Cadastrar
        </Button>
      </div>
    </>
  );
}

export default NovoUsuario;
