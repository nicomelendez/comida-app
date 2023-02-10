import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";
import { useEffect, useCallback } from "react";

export default function Total(){
    
    const {pedido, setNombre, nombre, colocarOrden, total} = useQuiosco();

    const comprobarPedido = useCallback(() =>{
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    },[pedido, nombre])

    useEffect(()=>{
        comprobarPedido();
    },[pedido, comprobarPedido])


    return(
        <Layout pagina='Total a pagar'>
            <h2 className="text-4xl font-black">Total y Confirmar pedido</h2>
            <p className="text-2xl my-10">Confirma tu pedido a contiuación</p>

            <form onSubmit={colocarOrden}>
                <div>
                    <label htmlFor="nombre" className="block uppercase text-slate-800 text-xl font-bold">Nombre</label>
                    <input id='nombre' onChange={e=>setNombre(e.target.value)} value={nombre} type='text' className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md"/>
                </div>
                <div className="mt-10">
                    <p className="text-2xl">Total a pagar {''} <span className="font-bold">{formatearDinero(total)}</span></p>
                </div>
                <div className="mt-5">
                    <input disabled={comprobarPedido()} type='submit' value='Confirmar pedido' className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600'} hover:cursor-pointer hover:bg-indigo-400 w-full lg:w-auto px-5 py-2 rounded uppercase text-center font-bold text-white`}/>
                </div>
            </form>
        </Layout>
    )
}