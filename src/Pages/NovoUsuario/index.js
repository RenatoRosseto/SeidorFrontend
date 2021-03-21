import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import Input from '../../Components/Input'
import Button from '@material-ui/core/Button';
import Select from '../../Components/Select'

import Header from '../../Components/Header'

import './styles.scss'
import {
  statusUsu
} from './api.js'

function NovoUsuario() {
  const [DataCad, setDataCad] = useState('')
  const [Cargo, setCargo] = useState('')
  const [Cpf, setCpf] = useState('')
  const [Nome, setNome] = useState('')
  const [UfNasc, setUfNasc] = useState('')
  const [Salario, setSalario] = useState('')
  const [Status, setStatus] = useState('')

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
    setStatus(e.value.name)
  }

  useEffect(() => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    setDataCad(date + "/" + month + "/" + year)
  }, []);

  async function cadastrarUsuario(e) {
    console.log("Cadastrando usuario")
    console.log(DataCad)
    console.log(Cargo)
    console.log(Cpf)
    console.log(Nome)
    console.log(UfNasc)
    console.log(Salario)
    console.log(Status)

    const response = await api.post('/user', {
      DataCad,
      Cargo,
      Cpf,
      Nome,
      UfNasc,
      Salario,
      Status
    })

    console.log(response.data)
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
        <Button variant="contained" color="primary" onClick={cadastrarUsuario} >
          Cadastrar
        </Button>
      </div>
    </>
  );
}

export default NovoUsuario;
