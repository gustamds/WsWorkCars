import { useContext } from "react";
import { CardCars } from "./CardCars";
import { fromUnixTime, format } from 'date-fns';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import noImage from "../assets/noImage.png";
import { AppContext } from "../App";
import { Header } from "./Header";

export function ListCars() {
  const {listCar} = useContext(AppContext)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
    <Header/>
      <h1 className="text-white font-bold text-2xl flex justify-center mt-8 mb-6">Lista de Carros</h1>
      <Slider {...settings}>
        {listCar.map((cars) => {
            // @ts-ignore
            const date = fromUnixTime(cars.timestamp_cadastro);
            const formattedDate = format(date, 'dd/MM/yyyy');

          return (
            <div key={cars.id}>
              <CardCars
                ano={cars.ano}
                src={cars.src ? cars.src : noImage}
                combustivel={cars.combustivel}
                cor={cars.cor}
                id={cars.id}
                marca_nome={cars.marca_nome}
                nome_modelo={cars.nome_modelo}
                num_portas={cars.num_portas}
                timestamp_cadastro={formattedDate}
                valor_fipe={cars.valor_fipe}
                marca_id={cars.marca_id}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}
