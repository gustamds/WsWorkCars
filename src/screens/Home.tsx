import { Header } from "../components/Header";
import { ListCarsByCheapestCars } from "../components/ListCarsByCheapestCars";
import { ListCarsByLastFiveRegister } from "../components/ListCarsByLastFiveRegister";
import { ListCarsByLessYears } from "../components/ListCarsByLessYears";

export function Home() {
  return (
    <>
        <Header/>
        <ListCarsByLastFiveRegister/>
        <ListCarsByLessYears/>
        <ListCarsByCheapestCars/>
    </>
  );
}
