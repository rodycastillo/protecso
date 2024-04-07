import React, { useEffect, useRef } from "react";

export const CardQuiz = ({ title, questions, children }) => {
  const listQuestions = useRef();

  const handleActive = (e) => {
    listQuestions.current.forEach((question) =>
      question.classList.remove("activeQuiz")
    );
    console.log(e.target);
    e.target.classList.add("activeQuiz");
  };

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   console.log("SIGUIENTE");
  // };

  useEffect(() => {
    const items = document.querySelectorAll("#listQuestions li");
    listQuestions.current = Array.from(items);

    const btnAction = document.querySelector("button#btnAction");

    if (listQuestions.current.length === 3) {
      const element = listQuestions.current[1];
      const { y } = element.getBoundingClientRect();
      const heigth = element.offsetHeight;
      const btnBottom = y - (heigth - 30) / 2;
      // console.log(element.getBoundingClientRect());
      // console.log(y, heigth, btnBottom);
      // btnAction.style.bottom = `${btnBottom}px`;
    }
  }, []);

  return (
    <div className="bg-prot bg-[url('/img/fondo.png')] w-screen h-screen bg-contain bg-no-repeat bg-center">
      <div className="w-full h-full flex relative justify-center items-center overflow-hidden">
        <div className="w-full mx-auto">
          <header className="mb-5 max-w-[95vw] mx-auto">
            <h2
              className="text-[#65a7da] font-c-regular text-wrap text-center text-2xl"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </header>
          <section className="max-w-[60vw] mx-auto">
            <ul
              className="flex flex-col gap-[10px] items-center justify-center"
              id="listQuestions"
            >
              {questions.map((question, i) => {
                return (
                  <li
                    id={`question-${i + 1}`}
                    key={i}
                    className="relative bg-[#e8e8e8] min-h-[50px] w-full px-4 rounded-xl flex items-center justify-center"
                    name={question.value}
                    onClick={(e) => handleActive(e)}
                  >
                    <span className="flex items-center justify-center absolute top-0 my-auto bottom-0 left-[-12.5px] bg-[#ee5245] rounded-full text-white w-[27px] h-[27px] pointer-events-none font-c-regular">
                      {question.id}
                    </span>
                    <p className="text-center font-c-regular text-[#12416f] relative pointer-events-none">
                      {question.value}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        {children}
      </div>
    </div>
  );
};
