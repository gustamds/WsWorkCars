interface SelectCarYearProps {
    selectedYear: string;
    setSelectedYear: (brand: string) => void;
}

export function SelectCarYear({ selectedYear, setSelectedYear }: SelectCarYearProps){
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(50), (val, index) => currentYear - index);

    return(
        <>
            <label htmlFor="underline_select" className="sr-only">
            Underline select
            </label>
            <select
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
            defaultValue=""
            id="underline_select"
            className="block py-2.5 mb-6 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
            <option disabled value="">Escolha o Ano do seu Veículo</option>
            {years.map((year, index) => {
                return (
                <>
                    <option key={index} value={year}>{year}</option>
                </>
                );
            })}
            </select>
        </>
    )
}