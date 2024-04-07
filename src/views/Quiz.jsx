import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/appContext";
import { CardQuiz } from "../components/CardQuiz";
import data from "/public/data/data.json";
import RightIcon from "/img/RightItem.png";

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const { hash } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNextQuestion = (id) => {
    // e.preventDefault();
    const wrapper = document.querySelector("#wrapper-questions");
    if (id === 1) {
      wrapper.style.transform = `translateY(-100vh)`;
      wrapper.style.transition = "all 1s";
    } else if (id === 2) {
      wrapper.style.transform = `translateY(-200vh)`;
      wrapper.style.transition = "all 1s";
    } else if (id === 3) {
      return navigate("/typage");
    }
  };

  useEffect(() => {
    if (!hash) return navigate("/");

    const arrData = data.sort((_a, _b) => Math.random() - 0.5).slice(0, 3);
    setQuestions(arrData);
  }, []);
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="w-screen flex flex-col" id="wrapper-questions">
        {questions.map((e, i) => {
          return (
            <CardQuiz key={e.id} title={e.title} questions={e.questions}>
              <button
                onClick={() => handleNextQuestion(i + 1)}
                id="btnAction"
                className="absolute h-10 w-10 right-[3%]"
              >
                <img
                  className="w-full h-full object-fill object-center"
                  src={RightIcon}
                  alt=""
                />
              </button>
            </CardQuiz>
          );
        })}
      </div>
    </div>
  );
};
