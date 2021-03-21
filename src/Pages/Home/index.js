import React, { useState } from 'react';

import Header from '../../Components/Header'
import {filtros} from './api'
import Select from '../../Components/Select'
import Input from '../../Components/Input'
import Button from '@material-ui/core/Button';

import './styles.scss'

function Home() {
  const [filtrarPor, setFiltrarPor] = useState({})

  function atualizaFiltro(e) {
    console.log(e.value)
    setFiltrarPor(e.value)
  }

  return (
    <>
      <Header titulo="Home" btnTipo="home" />
      <div className="containerHome">
        <div className="containerFiltros">
          <h2>Filtros:</h2>
          <Select titulo="Filtrar por" lista={filtros} minhaFunc={atualizaFiltro}  />
          <Input titulo={filtrarPor.name} />
          <Button variant="contained" color="primary">
            Aplicar
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
