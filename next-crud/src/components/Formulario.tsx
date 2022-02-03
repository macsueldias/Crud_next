import { useState } from "react";
import Cliente from "../core/cliente"
import Entrada from './Entrada'
import Botao from './Botao'

interface FormularioProps {
    cliente: Cliente
}
export default function Formulario(props) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
            <Entrada 
                texto="Código" 
                valor={id} 
                className="mb-4"
            />
            ):false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div>
                <Botao cor="blue" className="m-4">
                    Salvar
                </Botao>

                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}