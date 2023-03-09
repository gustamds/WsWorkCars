import { useContext } from "react";
import { CardCars } from "./CardCars";
import { fromUnixTime, format } from 'date-fns';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import noImage from "../assets/noImage.png";

import { AppContext } from "../App";
import { Header } from "./Header";

export function ListCarsByBrand() {
  const {listCar} = useContext(AppContext)

  const settingsByBrand = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <>
    <Header/>
      <h1 className="text-white font-bold text-2xl flex justify-center mt-8 mb-6">Lista de Carros por Marca:</h1>

      {Object.entries(
        listCar.reduce((acc, cars) => {
          // @ts-ignore
          if (!acc[cars.marca_nome]) {
            // @ts-ignore
            acc[cars.marca_nome] = [];
          }
          // @ts-ignore
          acc[cars.marca_nome].push(cars);
          return acc;
        }, {})
      ).map(([marca, carros]) => (
        <div key={marca}>
          <h1 className="text-white mb-4 mt-12 flex justify-center">{marca}</h1>
          <Slider {...settingsByBrand} className="min-[320px]:w-full md:w-2/5 mx-auto">
            {// @ts-ignore 
              carros.map((car) => {
              const date = fromUnixTime(car.timestamp_cadastro);
              const formattedDate = format(date, 'dd/MM/yyyy');

              return(
                <div key={car.id}>
                  <CardCars
                  src={car.src ? car.src : noImage}
                  ano={car.ano}
                  combustivel={car.combustivel}
                  cor={car.cor}
                  id={car.id}
                  marca_nome={car.marca_nome}
                  nome_modelo={car.nome_modelo}
                  num_portas={car.num_portas}
                  timestamp_cadastro={formattedDate}
                  valor_fipe={car.valor_fipe}
                  marca_id={car.marca_id}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      ))}
    </>
  );
}
