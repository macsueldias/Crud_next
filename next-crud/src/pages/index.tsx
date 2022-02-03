import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Macsuel', 31, '2'),
    new Cliente('Sara', 32, '3'),
    new Cliente('Sophia', 3, '4'),

  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-gray-100-700 
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="gray" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado = {clienteSelecionado}
          clienteExcluido = {clienteExcluido}>
        </Tabela>
        <Formulario></Formulario>
      </Layout>
    </div>
  )
}
  