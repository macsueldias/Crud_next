import Cliente from '../core/cliente'
import { IconeEdit, IconeTrash } from '../components/Icones'

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props) {

    function renderizarCabecalho() {
        return(
            <tr>
            <th className="text-left p-4">Código</th>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Idade</th>
            <th className='p-4'>Ações</th>
        </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center ">
                <button className={`
                    flex justify-content items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>{IconeEdit}</button>
                <button className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>{IconeTrash}</button>
            </td>
        )
    }


    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`
                  ${i % 2 === 0 ? 'bg-blue-100': 'bg-purple-200'}  
                `}>
                    <td className='Text-left p-4'>{cliente.id}</td>
                    <td className='Text-left p-4'>{cliente.nome}</td>
                    <td className='Text-left p-4'>{cliente.idade}</td>
                    {renderizarAcoes(cliente)}
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