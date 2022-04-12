import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";


export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    //para crear la paginacion
    const paginaRef = useRef(1);
    // async await es de mala practica para usar en useEffect
    useEffect(() => {
      // llamada a la api
      cargarUsuarios();
    }, []);
  
    const cargarUsuarios = async () => { 
        const resp = await reqResApi.get<ReqResListado>("/users", {
            //paginaRef hace referencia al objeto y current al actual valor
          params: { page: paginaRef.current },
        });
           // incrementa el useRef con current para sunmar en 1 la paginacion
           if( resp.data.data.length > 0) {
            setUsuarios(resp.data.data); 
        } else {
            paginaRef.current --;
            alert('no hay mas registros')
        }
    };

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }
    const paginaAnterior = () => {
        if(paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}