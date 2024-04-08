import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import LogoPreHome from "/img/LogoPreHome.png";
import { AppContext } from "../context/appContext";

export const Home = () => {
  const [showHome, setShowHome] = useState(false);
  const navigate = useNavigate();
  const { hash, setHash } = useContext(AppContext);

  const handleNext = (e) => {
    e.preventDefault();
    const hash_generated = Math.floor(1000000000 + Math.random() * 9000000000);
    setHash({ ...hash, value: hash_generated });
    return navigate(`/quiz`);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowHome(true);
    }, 1700);
  }, []);

  return (
    <>
      {!showHome ? (
        <motion.div
          initial={{ opacity: 0, transition: { duration: 1 } }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-prot bg-[url('/img/fondo.png')] w-screen h-screen bg-contain bg-no-repeat bg-center"
        >
          <div className="w-full h-full flex relative justify-center items-center">
            <div className="w-fit h-fit flex flex-col justify-center items-center gap-3 max-w-[400px]">
              <img
                className="max-w-[50vw] w-full h-auto bounceIn"
                src={LogoPreHome}
                alt="Logo Home"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-prot bg-[url('/img/fondo.png')] w-screen h-screen bg-contain bg-no-repeat bg-center"
        >
          <div className="w-full h-full flex relative justify-center items-center">
            <div className="w-fit h-fit flex flex-col justify-center items-center max-w-[430px]">
              <span className="fadeInDown block text-center font-c-regular text-[#12416f] mb-1 text-xl">
                Conviértete en un
              </span>
              <h1 className="fadeInDown text-center text-[#12416f] text-[50px] leading-[52px] font-c-bold mb-4">
                <span className="text-[#ee5345]">Digital</span> <br /> Partner
              </h1>
              <p className="fadeIn text-center text-[#12416f] text-sm mb-6 font-c-regular px-2 text-wrap">
                descubriendo con estás preguntas la dimensión de nuestros
                servicios que te ayudarán en tu Transformación Digital y
                adopción de Inteligencia Artificial
              </p>
              <button
                onClick={handleNext}
                className="fadeIn uppercase w-[110px] h-[35px] flex items-center justify-center font-c-bold text-white rounded-md bg-[#65a7da] "
              >
                <span className="text-[16px] leading-[16px] mt-[-4px]">
                  Comenzar
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
