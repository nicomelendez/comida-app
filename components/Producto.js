import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image"

const Producto = ({producto}) => {

    const {handleSetProducto, handleChangeModal} = useQuiosco()
    const {nombre, imagen, precio } = producto;

  return (
    <div  className="max-w-xs border p-3 shadow rounded">
        <Image className="shadow rounded" width={400} height={500} src={`/assets/img/${imagen}.jpg`} alt={`Imagen del platillo ${nombre}`}/>
        <div className="p-5">
            <h3 className="text-2xl font-bold h-24">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500" >{formatearDinero(precio)}</p>
            <button onClick={()=>{handleChangeModal() 
                                  handleSetProducto(producto)
                                  }} type="button" 
                                  className="bg-indigo-800 hover:bg-indigo-600 text-white w-full p-3 mt-5 uppercase font-bold text-xl">Agregar</button>
        </div>
    </div>
  )
}

export default Producto