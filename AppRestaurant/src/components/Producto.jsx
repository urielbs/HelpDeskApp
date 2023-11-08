import { formatMoney } from "../helpers"

export default function Producto({producto}) {
  
  const {nombre,precio,imagen} = producto

    return (
    <div className="border p-3 shadow-md bg-white">
        <img 
            src={`/img/${imagen}.jpg`} 
            className="w-full"
            alt={`Imagen ${nombre}`} 
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">
                {nombre}
            </h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatMoney(precio)}
            </p>
            <button 
                type="button" 
                className="bg-indigo-600 hover:bg-zinc-800 text-white w-full mt-5 p-3 uppercase font-bold"
            >
                Agregar
            </button>
        </div>
    </div>
  )
}
