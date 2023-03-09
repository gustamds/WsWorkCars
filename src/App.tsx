import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ListCars } from "./components/ListCars";
import { ListCarsByBrand } from "./components/ListCarsByBrand";
import { Form } from "./screens/Form";

import { createContext, useEffect, useState } from "react";
import { CardCarsProps } from "./components/CardCars";
import axios from "axios";
import { Home } from "./screens/Home";

export interface IAppContext {
  listCar: CardCarsProps[];
  setListCar: React.Dispatch<React.SetStateAction<CardCarsProps[]>>;
}

export const AppContext = createContext<IAppContext>({
  listCar: [],
  setListCar: () => {},
});

function App() {
  const [listCar, setListCar] = useState<CardCarsProps[]>([]);

  async function getListCars() {
    try {
      const response = await axios.get(
        "https://web-production-74a5.up.railway.app/https://wswork.com.br/cars.json"
      );
      setListCar(response.data);
    } catch (error) {
      console.log(error, "ERRO");
    }
  }

  useEffect(() => {
    getListCars();
  }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ listCar, setListCar }}>
        <div className="bg-slate-900 px-16 pb-16 h-auto">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/allCars" element={<ListCars/>} />
            <Route path="/registerNewCar" element={<Form/>} />
            <Route path="/allCarsByBrand" element={<ListCarsByBrand/>} />
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
