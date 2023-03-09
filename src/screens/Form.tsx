import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { useState, useContext } from "react";

import { CarImageForm } from "../components/CarImageForm";
import { InputNumberForm } from "../components/InputNumberForm";
import { InputTextForm } from "../components/InputTextForm";
import { SelectBrandCarsForm } from "../components/SelectBrandCarsForm";
import { SelectCarYear } from "../components/SelectCarYear";
import { AppContext } from '../App';
import { Header } from '../components/Header';

export function Form() {
  const [carImage, setCarImage] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [carValue, setCarValue] = useState(0);
  const [carDoor, setCarDoor] = useState(0);
  const [carFuel, setCarFuel] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carYear, setCarYear] = useState("");

  const { listCar, setListCar } = useContext(AppContext)

  // @ts-ignore
  function createNewCar(event) {
    const now = new Date();
    const timeStamp = Math.floor(now.getTime() / 1000);

    const uuid = uuidv4();
    const parsedId = parseInt(uuid.replace(/-/g, ''), 16);

    // @ts-ignore
    setListCar([...listCar, {
      id: parsedId,
      src: carImage,
      nome_modelo: carModel,
      marca_nome: carBrand,
      // @ts-ignore
      ano: carYear,
      combustivel: carFuel,
      cor: carColor,
      num_portas: carDoor,
      valor_fipe: carValue,
      // @ts-ignore
      timestamp_cadastro: timeStamp,
    }])

    setCarImage('');
    setCarModel('');
    setCarColor('');
    setCarValue(0);
    setCarDoor(0);
    setCarFuel('');
    setCarBrand('');
    setCarYear('');  

    toast.success('Veículo adicionado com sucesso!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    event?.preventDefault();
  }

  return (
    <>
      <Header/>
      <h1 className="text-white font-bold text-2xl flex justify-center mt-8">
        Cadastre Seu Carro Aqui:
      </h1>
      <form>
        <CarImageForm
          imageSelect={carImage}
          setImageSelect={setCarImage}
          onImageSelected={(url) => setCarImage(url)}
        />

        <InputTextForm
          labelName="Modelo do Carro"
          changeText={carModel}
          setChangeText={setCarModel}
        />

        <SelectBrandCarsForm
          selectedBrand={carBrand}
          setSelectedBrand={setCarBrand}
        />

        <select
          value={carFuel}
          onChange={(event) => setCarFuel(event.target.value)}
          defaultValue=""
          id="underline_select"
          className="block py-2.5 mb-6 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        >
          <option disabled value="">
            Escolha o Combustível do Veículo
          </option>
          <option value="Alcool">Alcool</option>
          <option value="gasolina">Gasolina</option>
          <option value="flex">Flex</option>
          <option value="eletrico">Eletrico</option>
          <option value="hibrido">Hibrido</option>
        </select>

        <InputTextForm
          labelName="Cor do Carro"
          changeText={carColor}
          setChangeText={setCarColor}
        />

        <InputNumberForm
          labelName="Quantidade de Portas"
          numberChange={carDoor}
          setNumberChange={setCarDoor}
        />

        <InputNumberForm
          labelName="Valor do Carro"
          numberChange={carValue}
          setNumberChange={setCarValue}
        />

        <SelectCarYear selectedYear={carYear} setSelectedYear={setCarYear} />

        <button
          type="submit"
          onClick={createNewCar}
          className="text-white block transition duration-300 mb-6 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cadastrar Meu Carro
        </button>
        <ToastContainer/>
      </form>
    </>
  );
}
