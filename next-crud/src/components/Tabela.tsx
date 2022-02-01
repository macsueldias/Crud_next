import Cliente from '../core/cliente'
import { IconeEdit, IconeTrash } from '../components/Icones'

interface TabelaProps {
    clientes: Cliente[]
    clientSelecionado: (cliente: Cliente) => void
    clienteExcluido: (cliente: Cliente) => void
}

export default function Tabela(props) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}

            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center ">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-content items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>{IconeEdit}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>{IconeTrash}</button>
                ) : false}

            </td>
        )
    }


    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`
                  ${i % 2 === 0 ? 'bg-blue-100' : 'bg-purple-200'}  
                `}>
                    <td className='Text-left p-4'>{cliente.id}</td>
                    <td className='Text-left p-4'>{cliente.nome}</td>
                    <td className='Text-left p-4'>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }
    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-puple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}