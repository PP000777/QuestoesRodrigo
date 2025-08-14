import { useState } from 'react'
import React from 'react'
import './App.css'
import DetalhesProduto from './components/DetalhesProduto'

function App() {
  return (
    <>
      <DetalhesProduto props = {{nome: "FrigoCamelo", preço: 100000, desc: "Camelo com Geladeira"}}/>
    </>
  )
}

export default App
