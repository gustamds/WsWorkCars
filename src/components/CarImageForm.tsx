import axios from "axios";
import { useState, useEffect } from "react";
import { BarProgressUpload } from "./BarProgressUpload";

interface CarImageFormProps {
  imageSelect: string;
  setImageSelect: (image: string) => void;
  onImageSelected: (image: string) => void;
}

export function CarImageForm({ imageSelect, setImageSelect, onImageSelected }:CarImageFormProps) {
  const [imageSelected, setImageSelected] = useState(imageSelect);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    setImageSelected(imageSelect);
  }, [imageSelect]);

  function uploadImage(files : FileList) {
    if (!files.length) return;

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "vuehpjxn");
    setShowProgressBar(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dxxsxnxn7/image/upload", formData, {
        onUploadProgress: function (progressEvent) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total ?? 0));
          setUploadProgress(percentCompleted);
        },
      })
      .then((response) => {
        setImageSelected(response.data.url);
        setShowProgressBar(false);
        if (typeof onImageSelected === "function") {
          onImageSelected(response.data.url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="mb-6">
      <label className="text-white mt-6 transition flex justify-center duration-300 mb-6 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer" htmlFor="file_input">
        Escolha a Melhor Imagem do Seu Carro
      </label>
      <input
        className="w-full text-sm text-gray-500 hidden border rounded-lg cursor-pointe dark:text-gray-500 focus:outline-none dark:bg-gray-700 dark:border-white dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={(event) => {
          uploadImage(event.target.files!);
        }}
      />
      <img className={`mb-4 mt-4 w-60 h-auto ${!imageSelected ? "hidden" : ""}`} src={imageSelected} alt="Car Image" />
      {showProgressBar && <BarProgressUpload progress={uploadProgress} />}
    </div>
  );
}