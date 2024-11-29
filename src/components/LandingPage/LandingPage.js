import { useState } from "react";
import image1 from "../../assets/arohi1.jpg";
import ground1 from "../../assets/ground1.jpeg";

export default function LandingPage() {
  const [imageNo, setImageNo] = useState(image1);

  function handleLeftClick() {
    setImageNo((prevstate) => prevstate - 1);
  }

  function handleRightClick() {
    setImageNo((prevstate) => prevstate + 1);
  }

  console.log(`image${imageNo}`);

  return (
    <div className="md:flex flex-row">
      <div className="md:w-1/3 md:h-30 h-auto w-full flex flex-col items-center justify-center">
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3067870/pexels-photo-3067870.jpeg?auto=compress&cs=tinysrgb&w=600')",
            opacity: 0.9,
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4">
            <span className="text-3xl font-bold m-4">Venus Sports</span>
            <p className="mt-4">
              Venus Sports Association is a local volleyball club in Reshimbagh,
              Nagpur. It started in 1987. Every day, people come here to play
              volleyball and enjoy. We also organize summer camps every year to
              help players learn and improve. It’s a great place for everyone
              who loves volleyball.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 md:h-screen  h-auto w-full flex flex-col items-center justify-center">
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('${ground1}')`,
            opacity: 0.9,
          }}
        >
          <div className="flex flex-col">
            <div className="absolute inset-0 flex flex-row items-center justify-between px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
                onClick={handleLeftClick}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
                onClick={handleRightClick}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="md:px-4 py-2 px-2 bg-slate-100 opacity-50 m-4 rounded-lg">
              Venus Sports Association is a local volleyball club in Reshimbagh,
              Nagpur. It started in 1987. Every day, people come here to play
              volleyball and enjoy. We also organize summer camps every year to
              help players learn and improve. It’s a great place for everyone
              who loves volleyball
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
