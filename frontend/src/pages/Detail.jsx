import React, {useEffect} from "react";
import { Container, ListGroup } from "react-bootstrap";
import s from "./Detail.module.css"
import {getClientsById} from "../redux/actions/clientsAction"
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading"

import Tabla2 from "../components/Tabla2";




function Detail() {

    const dispatch = useDispatch()
    const { id } = useParams();
    const cliente = useSelector(state=>state.cliente)
   

    useEffect(()=>{
        dispatch(getClientsById(id))
        console.log(id)
        
    },[dispatch])
    


    return (
       <>
       {
        cliente.length>0?
       
        <Tabla2
        id={cliente._id}
        nombre={cliente.nombre}
        apellidoM={cliente.apellidoM}
        apellidoP={cliente.apellidoP}
        calle={cliente.calle}
        numero={cliente.numero}
        colonia={cliente.colonia}
        telefono={cliente.telefono}
        className={s.table}
        />
        :<Loading/>
       }
       <Link to="/">
			<i class="bi bi-arrow-left-circle">Volver</i>
		</Link>
        </>
    );
}

export default Detail;