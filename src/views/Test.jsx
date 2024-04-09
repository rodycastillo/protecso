import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/appContext";
// import { CardQuiz } from "../components/CardQuiz";
import data from "/public/data/data.json";
import RightIcon from "/img/RightItem.png";

export const Test = () => {
  // const [questions, setQuestions] = useState([]);
  // const { hash } = useContext(AppContext);
  // const navigate = useNavigate();

  const handleNextQuestion = (id) => {
    // e.preventDefault();
    // const wrapper = document.querySelector("#wrapper-questions");
    // if (id === 1) {
    //   wrapper.style.transform = `translateY(-100vh)`;
    //   wrapper.style.transition = "all 1s";
    // } else if (id === 2) {
    //   wrapper.style.transform = `translateY(-200vh)`;
    //   wrapper.style.transition = "all 1s";
    // } else if (id === 3) {
    //   return navigate("/typage");
    // }
  };

  useEffect(() => {
    // if (!hash) return navigate("/");
    // const arrData = data.sort((_a, _b) => Math.random() - 0.5).slice(0, 3);
    // setQuestions(arrData);
  }, []);
  return (
    <div className="content">
      <div className="content__wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
          suscipit officiis voluptas dolorem possimus sint molestiae, modi
          sapiente cupiditate hic vitae delectus.
        </p>
      </div>
    </div>
  );
};
