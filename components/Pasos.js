import useQuiosco from "@/hooks/useQuiosco";
import { useRouter } from "next/router"

const pasos = [
    {id:1, nombre:'Menú', url:'/'},
    {id:2, nombre:'Resumen', url:'/resumen'},
    {id:3, nombre:'Datos y Total', url:'/total'}
]

export const Pasos = () => {

    const router = useRouter();
    
    const calcularProgreso = () =>{
        let porcentaje;
        
        if(router.pathname === '/'){
            porcentaje = 2
        }else if(router.pathname === '/resumen'){
            porcentaje = 50
        }else if(router.pathname === '/total'){
            porcentaje = 100
        }
        return `${porcentaje}%`
    }
  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map(paso=>{
                return(
                    <button onClick={()=>{
                        router.push(paso.url)
                    }} className="text-2xl font-bold" key={paso.id}>{paso.nombre}</button>
                )
            })}
        </div>
        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-400 text-xs leading-none h-2 text-center text-white" style={{width: calcularProgreso()}}></div>
        </div>
    </>
  )
}
