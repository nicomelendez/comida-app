import Orden from "@/components/Orden";
import AdminLayout from "@/layout/AdminLayout";
import axios from "axios";
import useSWR  from "swr";

export default function Admin(){

    const fetcher = () => axios('/api/ordenes').then(peticion=>peticion.data)
    const {data, error, isLoading} = useSWR('/api/ordenes', fetcher, {refreshInterval:100});

    return(
        <AdminLayout pagina='Admin'>
            <h2 className="text-4xl font-black">Panel de administración</h2>
            <p className="text-2xl my-10">Administra las ordenes</p>
            
            {isLoading && <p>Cargando...</p>}
            {error && <p>Hemos tenido un error.</p>}

            {data && data.length ? data.map(orden=>{
                return(
                    <Orden key={orden.id} orden={orden}/>
                )
            }):(<><p>No hay ordenes pendientes.</p></>)}
        </AdminLayout>
    )
}