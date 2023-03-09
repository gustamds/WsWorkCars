interface BarProgressUploadProps {
  progress: number;
}

export function BarProgressUpload({ progress }: BarProgressUploadProps) {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600">
            Progresso
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-white">
            {progress}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-600">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-gray-500 justify-center bg-blue-600"
        ></div>
      </div>
    </div>
  );
}
