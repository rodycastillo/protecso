import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";
import {
  CARD1,
  CARD10,
  CARD11,
  CARD2,
  CARD3,
  CARD4,
  CARD5,
  CARD6,
  CARD7,
  CARD8,
  CARD9,
} from "../components/CardQuiz";
import RightIcon from "/img/RightItem.png";

export const Quiz = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { hash } = useContext(AppContext);

  let arr = [
    <CARD1 />,
    <CARD2 />,
    <CARD3 />,
    <CARD4 />,
    <CARD5 />,
    <CARD6 />,
    <CARD7 />,
    <CARD8 />,
    <CARD9 />,
    <CARD10 />,
    <CARD11 />,
  ];
  arr = arr.sort((_a, _b) => Math.random() - 0.5).slice(0, 3);

  const handleNextQuestion = (e) => {
    const wrapper = document.querySelector("#wrapper-questions");
    const component1 = document.querySelector("#component-1");
    const component2 = document.querySelector("#component-2");
    const component3 = document.querySelector("#component-3");
    if (step === 1) {
      console.log("1");
      const items = component1.querySelectorAll("div div div section ul li");
      const isSomeActive = Array.from(items).some((item) =>
        item.classList.contains("activeQuiz")
      );
      if (!isSomeActive) return;
      wrapper.style.transform = `translateY(-100vh)`;
      wrapper.style.transition = "all 1s";
      setStep(2);
    } else if (step === 2) {
      const items = component2.querySelectorAll("div div div section ul li");
      const isSomeActive = Array.from(items).some((item) =>
        item.classList.contains("activeQuiz")
      );
      if (!isSomeActive) return;
      wrapper.style.transform = `translateY(-200vh)`;
      wrapper.style.transition = "all 1s";
      setStep(3);
    } else if (step === 3) {
      const items = component3.querySelectorAll("div div div section ul li");
      const isSomeActive = Array.from(items).some((item) =>
        item.classList.contains("activeQuiz")
      );
      if (!isSomeActive) return;
      return navigate("/typage");
    }
  };

  useEffect(() => {
    if (!hash.value) return navigate("/");
    // const arrData = data.sort((_a, _b) => Math.random() - 0.5).slice(0, 3);
    // setQuestions(arrData);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden relative">
      <div className="w-screen flex flex-col" id="wrapper-questions">
        {arr.map((component, i) => (
          <div key={i} id={`component-${i + 1}`}>
            {component}
          </div>
        ))}
      </div>
      <button
        onClick={(e) => handleNextQuestion(e)}
        id="btnAction"
        className="h-10 w-10 btn-c"
      >
        <img
          className="w-full h-full object-fill object-center"
          src={RightIcon}
          alt=""
        />
      </button>
    </div>
  );
};
