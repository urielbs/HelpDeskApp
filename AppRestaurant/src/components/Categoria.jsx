

export default function Categoria({categoria}) {

  const {icono, id, nombre} = categoria  

  return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-amarillo-100 cursor-pointer">

        <img 
            src={`/img/icono_${icono}.png`} 
            alt="Imagen icono" 
            className="w-12"
        />  

        <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>

    </div>
  )
}
