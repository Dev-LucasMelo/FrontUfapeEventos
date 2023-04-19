import React from 'react';
import './crudeventos.css'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoCreateSharp } from 'react-icons/io5'

const CrudEventos = (props) => {

    const Rotaeventos = props.eventos.eventos //desestruração da prop
   
    return (
        <section className='Crud-Eventos-comp'>
            <div className='Tittle-crud-eventos'>
                <div className='Tittle-crud-eventos-subcontainer'>
                    <h1>Eventos</h1>
                </div>
                <div className='Icon-criar-box'>
                    <IoCreateSharp className='icon' />
                </div>
            </div>
            <div className='lista-box'>
                <div className='header-lista'>
                    <div className='campo-lista-header'>
                        Nome evento
                    </div>
                    <div className='campo-lista-header '>
                        Endereço
                    </div>
                    <div className='campo-lista-header tittle-data-spacing'>
                        Data
                    </div>
                    <div className='campo-lista-header'>
                        edit / excluir
                    </div>
                </div>

                <div className='lista-box-subcontainer'>
                    {
                        Rotaeventos.map(element => {
                            return (
                                <div className='item-lista'>
                                    <div className='campo-lista'>
                                        {element.nome}
                                    </div>
                                    <div className='campo-lista'>
                                        {element.endereco.rua}
                                    </div>
                                    <div className='campo-lista dataspacing'>
                                        {element.data}
                                    </div>
                                    <div className='campo-lista editar-excluir'>
                                        <AiFillEdit className='icon' />
                                        <AiFillDelete className='icon' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default CrudEventos;