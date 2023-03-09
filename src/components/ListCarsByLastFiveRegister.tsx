import { useContext } from "react";
import { CardCars } from "../components/CardCars";
import { fromUnixTime, format } from 'date-fns';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import noImage from "../assets/noImage.png";
import { AppContext } from "../App";

export function ListCarsByLastFiveRegister() {
  const {listCar} = useContext(AppContext)

  function getRecentCars() {
    const lastFiveRegisterCars = listCar.sort(
        (car1, car2) => 
        car2.timestamp_cadastro - car1.timestamp_cadastro
    );
    return lastFiveRegisterCars.slice(0,5);
  }

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

  const recentCars = getRecentCars();

  return (
    <>
      <h1 className="text-white font-bold text-2xl flex justify-center mb-6 mt-8">Últimos 5 Cadastrados</h1>
      <Slider {...settings}>
        {recentCars.map((cars) => {
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
