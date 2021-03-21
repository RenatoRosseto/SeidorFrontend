import React, { useState } from 'react';

import Header from '../../Components/Header'
import {filtros} from './api'
import Select from '../../Components/Select'
import Input from '../../Components/Input'
import Button from '@material-ui/core/Button';

import './styles.scss'

function Home() {
  const [filtrarPor, setFiltrarPor] = useState({})
  const [termoFiltro, setTermoFiltro] = useState('')

  function atualizaFiltro(e) {
    setFiltrarPor(e.value)
  }

  function atualizaTermoFiltro(e) {
    setTermoFiltro(e)
  }

  function aplicaFiltros(e) {
    console.log("Aplicando filtros")
    console.log("Filtrando por: " + filtrarPor.value + "//" + filtrarPor.name + "//" + termoFiltro)
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
      </div>
    </>
  );
}

export default Home;
