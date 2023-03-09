export function SelectBrandCarsForm({ selectedBrand, setSelectedBrand }) {
    const carBrands = [
        {id: 1, brand: "Abarth" , valueBrand: "Abarth"},
        {id: 2, brand: "Aiways", valueBrand: "Aiways"},
        {id: 3, brand:"Alfa Romeu", valueBrand: "Alfa Romeu"},
        {id: 4, brand:"Alpine", valueBrand: "Alpine"},
        {id: 5, brand:"Aston Martin", valueBrand: "Aston Martin"},
        {id: 6, brand:"Audi", valueBrand: "Audi"},
        {id: 7, brand:"Bentley", valueBrand: "Bentley"},
        {id: 8, brand:"BMW", valueBrand: "BMW"},
        {id: 9, brand:"Citroën", valueBrand: "Citroën"},
        {id: 10, brand:"Cupra", valueBrand: "Cupra"},
        {id: 11, brand:"Dacia", valueBrand: "Dacia"},
        {id: 12, brand:"DS", valueBrand: "DS"},
        {id: 13, brand:"Ferrari", valueBrand: "Ferrari"},
        {id: 14, brand:"Fiat", valueBrand: "FIAT"},
        {id: 15, brand:"Ford", valueBrand: "FORD"},
        {id: 16, brand:"Honda", valueBrand: "Honda"},
        {id: 17, brand:"Hyundai", valueBrand: "Hyundai"},
        {id: 18, brand:"Jaguar", valueBrand: "Jaguar"},
        {id: 19, brand:"Jeep", valueBrand: "Jeep"},
        {id: 20, brand:"Kia", valueBrand: "Kia"},
        {id: 21, brand:"Lamborghini", valueBrand: "Lamborghini"},
        {id: 22, brand:"Land Rover", valueBrand: "Land Rover"},
        {id: 23, brand:"Lexus", valueBrand: "Lexus"},
        {id: 24, brand:"Lotus", valueBrand: "Lotus"},
        {id: 25, brand:"Maserati", valueBrand:"Maserati"},
        {id: 26, brand:"Mazda", valueBrand: "Mazda"},
        {id: 27, brand:"Mercedes-Benz", valueBrand: "Mercedes-Benz"},
        {id: 28, brand:"MG", valueBrand: "MG"},
        {id: 29, brand:"Mini", valueBrand: "Mini"},
        {id: 30, brand:"Mitsubishi", valueBrand: "Mitsubishi"},
        {id: 31, brand:"Nissan", valueBrand: "Nissan"},
        {id: 32, brand:"Opel", valueBrand: "Opel"},
        {id: 33, brand:"Peugeot", valueBrand: "Peugeot"},
        {id: 34, brand:"Polestar", valueBrand: "Polestar"},
        {id: 35, brand:"Porsche", valueBrand: "Porsche"},
        {id: 36, brand:"Renault", valueBrand: "Renault"},
        {id: 37, brand:"Seat", valueBrand: "Seat"},
        {id: 38, brand:"Škoda", valueBrand: "Škoda"},
        {id: 39, brand:"Smart", valueBrand: "Smart"},
        {id: 40, brand:"Suzuki", valueBrand: "Suzuki"},
        {id: 41, brand:"Tesla", valueBrand: "Tesla"},
        {id: 42, brand:"Toyota", valueBrand: "TOYOTA"},
        {id: 43, brand:"Volkswagen", valueBrand: "VW"},
        {id: 44, brand:"Volvo", valueBrand: "Volvo"},
      ];

    return(
        <>
            <label htmlFor="underline_select" className="sr-only">
            Underline select
            </label>
            <select
            value={selectedBrand}
            onChange={(event) => setSelectedBrand(event.target.value)}
            defaultValue=""
            id="underline_select"
            className="block py-2.5 mb-6 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
            <option disabled value="">Escolha a Marca do Veículo</option>
            {carBrands.map((brands) => {
                return (
                <>
                    <option key={brands.id} value={brands.valueBrand}>{brands.brand}</option>
                </>
                );
            })}
            </select>
        </>
    )
}