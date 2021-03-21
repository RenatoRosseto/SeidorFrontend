import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import Header from '../../Components/Header'
import Select from '../../Components/Select'
import Input from '../../Components/Input'
import Table from '../../Components/Table'
import Button from '@material-ui/core/Button';

import {
  filtros, 
  colunasTabela,
  // linhasTabela
} from './api'

import './styles.scss'

function Home() {
  const [filtrarPor, setFiltrarPor] = useState({})
  const [termoFiltro, setTermoFiltro] = useState('')
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function carregaUsuarios() {
      const response = await api.get('/users')
  
      setUsuarios(response.data)
    }
    carregaUsuarios()
  }, [])

  function atualizaFiltro(e) {
    setFiltrarPor(e.value)
  }

  function atualizaTermoFiltro(e) {
    setTermoFiltro(e)
  }

  function aplicaFiltros(e) {
    console.log("Aplicando filtros")
    console.log("Filtrando por: " + filtrarPor.value + "//" + filtrarPor.name + "//" + termoFiltro)

    // const response = api.get('/search', {
    //   DataCad,
    //   Cargo,
    //   Cpf,
    //   Nome,
    //   UfNasc,
    //   Salario,
    //   Status
    // })
  
    // setUsuarios(response.data)
  }

  return (
    <>
      <Header titulo="Home" btnTipo="home" />
      <div className="containerHome">
        <div className="containerFiltros">
          <h2>Filtros:</h2>
          <Select titulo="Filtrar por" lista={filtros} minhaFunc={atualizaFiltro} />
          <Input titulo={filtrarPor.name} minhaFunc={atualizaTermoFiltro} />
          <Button variant="contained" color="primary" onClick={aplicaFiltros}>
            Aplicar
          </Button>
        </div>
        <div className="containerTable">
          <Table columns={colunasTabela} rows={usuarios} />
        </div>
      </div>
    </>
  );
}

export default Home;
