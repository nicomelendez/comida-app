import useQuiosco from '@/hooks/useQuiosco';
import { listaDeEstilos } from '@/utils/listaDeEstilos';
import Image from 'next/image';

export const Categoria = ({categoria}) => {
    const {categoriaActual, handleClickCategoria} = useQuiosco()
    const {id, nombre, icono} = categoria;
    
  return (
    <div className={`${
      categoriaActual?.id === id ? "bg-amber-400" : ""
    } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image width={70} height={70} src={`/assets/img/icono_${icono}.svg`} alt='Imagen de iconos'/>
        <button onClick={()=>handleClickCategoria(id)} type='button' className='text-2xl font-bold hover:cursor-pointer'>
          {nombre}
        </button>
    </div>
  )
}
