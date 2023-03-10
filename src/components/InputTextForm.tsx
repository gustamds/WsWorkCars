interface InputTextFormProps{
  labelName: string;
  changeText: string;
  setChangeText: (value: string) => void;
};

export function InputTextForm({ labelName, changeText, setChangeText } :InputTextFormProps){
    return(
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="model_car"
            id="model_car"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(event) => setChangeText(event.target.value)}
            value={changeText}
            required
          />
          <label
            htmlFor="model_car"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {labelName}
          </label>
        </div>
    )
}