import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { AppContext } from "../context/appContext";

import Bicycle from "/img/Bicycle.png";

export const Thanks = () => {
  const navigate = useNavigate();
  const { setHash } = useContext(AppContext);

  const handleClick = () => {
    // window.open("https://www.linkedin.com/company/protecso-usa/", "_blank");
    setHash(null);
    return navigate("/");
  };

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="bg-prot bg-[url('/img/fondo.png')] w-screen h-screen bg-contain bg-no-repeat bg-center">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex items-center gap-5  justify-custom max-w-[78vw] w-full flex-wrap">
          <div className="w-fit text-center">
            <h2 className="text-[#ee5345] font-c-bold text-3xl mb-5">
              FELICITACIONES
            </h2>
            <span className="block mb-2 text-[#12416f] font-c-regular">
              Ahora síguenos en LinkedIn:
            </span>
            <button
              onClick={handleClick}
              className="py-[5px] px-[10px] font-bold text-white rounded-md bg-[#65a7da] mb-4 block w-fit mx-auto font-c-regular"
            >
              LinkedIn/Protecso
            </button>
            <p className="text-[#12416f] max-w-[310px] font-c-regular">
              Muestra la pantalla de que nos sigues al personal y
              automáticamente recibirás tu premio así como ingresar al sorteo de{" "}
              {/* <br /> */}
              <strong className="font-c-bold">
                UNA BICICLETA ELÉCTRICA MILAN
              </strong>
            </p>
          </div>
          <div>
            <img
              src={Bicycle}
              alt="Bicycle img - Protecsa"
              className="max-h-[200px] h-full w-auto object-center object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
