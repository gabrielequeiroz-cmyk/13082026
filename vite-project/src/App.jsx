import { useState, useEffect } from 'react'

import './App.css'   

const [usuarios, setUsuarios] = useState([])

useEffect(() => {
  async function buscarUsuarios(){
    const resposta = await fetch('http://jsonplaceholder.typicode.com/users')
    const dados = await resposta.json()
    setUsuarios(dados)
  }

  buscarUsuarios()
}, [])

function App() {

  return (
    <>
      <section id="center">
        <h1>Lista de Usuários</h1>
        <ul>
          {usuarios.map((usuarios) => (
            <li key={usuarios.id}>{usuarios.name}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
