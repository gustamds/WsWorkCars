import { CurrencyDollarSimple, CalendarBlank, GasPump, PaintBucket, Door, Car, Info, CalendarPlus } from "phosphor-react";

export interface CardCarsProps {
  id: number;
  ano: number;
  combustivel: string;
  cor: string;
  marca_id?: number;
  marca_nome: string;
  nome_modelo: string;
  num_portas: number;
  timestamp_cadastro: string;
  valor_fipe: number;
  src: string;
}

export function CardCars({
  ano,
  combustivel,
  cor,
  id,
  marca_nome,
  nome_modelo,
  num_portas,
  timestamp_cadastro,
  valor_fipe,
  src
}: CardCarsProps) {
  return (
    <>
      <div key={id} className="min-[320px]:m-0 min-[480px]:ml-2 min-[480px]:mr-2 md:ml-2 md:mr-2 lg:ml-4 lg:mr-4">

          <img
          className="rounded-t-lg w-full object-cover max-h-16 min-h-16"
          src={src}
          alt="Car Image"
          />

        <div className="p-4 bg-slate-800 rounded-b-lg flex flex-wrap flex-col gap-2">
        <div className=" flex items-center gap-2">
            <Car size={20} color="#FFFFFF" />
            <h5 className="text-lg font-bold text-white">{nome_modelo}</h5>
        </div>
        <div className="flex items-center gap-2">
            <Info size={20} color="#FFFFFF" />
            <p className="text-white">{marca_nome}</p>
        </div>
          <div className="flex items-center gap-2">
            <CurrencyDollarSimple size={20} color="#FFFFFF" />
            <p className="text-white">{valor_fipe}</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarBlank size={20} color="#FFFFFF" />
            <p className="text-white">{ano}</p>
          </div>
          <div className="flex items-center gap-2">
            <GasPump size={20} color="#FFFFFF" />
            <p className="text-white">{combustivel}</p>
          </div>
          <div className="flex items-center gap-2">
            <PaintBucket size={20} color="#FFFFFF" />
            <p className="text-white">{cor}</p>
          </div>
          <div className="flex items-center gap-2">
            <Door size={20} color="#FFFFFF" />
            <p className="text-white">{num_portas}</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarPlus size={20} color="#FFFFFF" />
            <p className="text-white">{timestamp_cadastro}</p>
          </div>
        </div>
      </div>
    </>
  );
}
