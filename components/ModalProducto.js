import { useState, useEffect } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

const ModalProducto = () => {
    
    const {producto} = useQuiosco();

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image src={`/assets/img/${producto.imagen}.jpg`} width={300} height={400} alt={`Imagen producto ${producto.nombre}`} />
        </div>

        <div className="md:w-2/3">

        </div>
    </div>
  );
};

export default ModalProducto;
