import React, { useEffect, useState } from 'react';
import "./index.css"
import logo from "./../../images/logo.svg"
import { useNavigate, useParams } from 'react-router-dom'
import CrudEventos from '../fluxoadm/CrudEventos/crudeventos';
import CrudOps from '../Crudopts/Crudopts';
import CrudImprensa from '../fluxoadm/CrudImprensa/crudimprensa';
import CrudAdm from '../fluxoadm/CrudAdministradores/crudadm';
import CrudAgenciaImprensa from '../fluxoadm/CrudAgenciaImprensa/CrudAgenciaImprensa';
import decoder from '../../services/decoder';
import CadastroEvento from '../fluxoadm/CrudEventos/cadastrar/cadastrarevento';
import EditarEvento from '../fluxoadm/CrudEventos/editar/editarevento';
import CadastoAgenciaImprensa from '../fluxoadm/CrudAgenciaImprensa/cadastrar/cadastraragenciaimprensa';
import EditarAgenciaImprensa from '../fluxoadm/CrudAgenciaImprensa/editar/editarAgenciaImprensa';
import CrudAgenciaEventos from '../fluxoadm/crudAgenciaEventos/CrudAgenciaEventos';
import CadastoAgenciaEventos from '../fluxoadm/crudAgenciaEventos/cadastrar/cadastraragenciaeventos';
import EditarAgenciaEventos from '../fluxoadm/crudAgenciaEventos/editar/editaragenciaeventos';

const IndexAdm = (props) => {
    const {crudOpt} = useParams();
    let [nome,setNome] = useState('');
    const [informacoesUsuario,setInformacoesUsuario] = useState({});
    const navigate = useNavigate();

    function RenderComp (){
        if (crudOpt === undefined){
            return <CrudOps />
        } else if (crudOpt === "eventos"){
            return <CrudEventos eventos={props.eventos}/>
        }else if(crudOpt === "adicionareventos") {
            return <CadastroEvento/>
        }else if(crudOpt === "editarevento"){
            return <EditarEvento/>
        }else if (crudOpt === "imprensa"){
            return <CrudImprensa imprensa={props.Imprensa} />
        }else if (crudOpt === "adms"){
            return <CrudAdm Adms={props.Adms} /> 
        }else if (crudOpt === "agenciaImprensa"){
            return <CrudAgenciaImprensa AgenciaImprensa={props.AgenciaImprensa} /> 
        }else if(crudOpt === "adicionaragenciaimprensa"){
            return <CadastoAgenciaImprensa/>
        }else if(crudOpt === "editaragenciaimprensa"){
            return <EditarAgenciaImprensa/>
        }else if (crudOpt === "agenciaeventos"){
            return <CrudAgenciaEventos/> 
        }else if (crudOpt === "adicionaragenciaeventos"){
            return <CadastoAgenciaEventos/> 
        }else if (crudOpt === "editaragenciaeventos"){
            return <EditarAgenciaEventos/> 
        }
    }

    useEffect(()=>{
        setInformacoesUsuario(decoder(sessionStorage.getItem('token')));
        setNome(informacoesUsuario.name);
    },[])

    function logout(){
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <section className='index-adm-page'>
            <header className='header-index'>
                <div className='header-logo-container'>
                    <div className='logo-header'>
                        <img className='img' src={logo} alt="" />
                    </div>
                </div>
                <div className='opts-user'>
                    <div className='name-container'>
                        {nome}
                    </div>
                    <div className='sair-container'>
                        <button className='sair-button' onClick={logout}>Sair</button>
                    </div>
                </div>
            </header>
            {RenderComp()}
        </section>
    );
}

export default IndexAdm;