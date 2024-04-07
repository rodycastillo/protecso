import React, { useEffect, useRef } from "react";
import { CardBoilerplate } from "./CardBoilerplate";

// const CardQuiz = ({ title, questions }) => {
//   //   const listQuestions = useRef();
//   //   const handleActive = (e) => {
//   //     listQuestions.current.forEach((question) =>
//   //       question.classList.remove("activeQuiz")
//   //     );
//   //     console.log(e.target);
//   //     e.target.classList.add("activeQuiz");
//   //   };
//   //   // const handleNext = (e) => {
//   //   //   e.preventDefault();
//   //   //   console.log("SIGUIENTE");
//   //   // };
//   //   useEffect(() => {
//   //     const items = document.querySelectorAll("#listQuestions li");
//   //     listQuestions.current = Array.from(items);
//   //     // const btnAction = document.querySelector("button#btnAction");
//   //     // if (listQuestions.current.length === 3) {
//   //     //   const element = listQuestions.current[1];
//   //     //   const { y } = element.getBoundingClientRect();
//   //     //   const heigth = element.offsetHeight;
//   //     //   const btnBottom = y - (heigth - 30) / 2;
//   //     //   // console.log(element.getBoundingClientRect());
//   //     //   // console.log(y, heigth, btnBottom);
//   //     //   // btnAction.style.bottom = `${btnBottom}px`;
//   //     // }
//   //   }, []);
//   //   return (
//   //     <CardBoilerplate>
//   //       <div className="w-full mx-auto">
//   //         <header className="mb-5 max-w-[95vw] mx-auto">
//   //           <h2
//   //             className="text-[#65a7da] font-c-regular text-wrap text-center text-2xl"
//   //             dangerouslySetInnerHTML={{ __html: title }}
//   //           ></h2>
//   //         </header>
//   //         <section className="container mx-auto">
//   //           <ul
//   //             className="flex flex-col gap-[10px] items-center justify-center"
//   //             id="listQuestions"
//   //           >
//   //             {questions.map((question, i) => {
//   //               return (
//   //                 <li
//   //                   id={`question-${i + 1}`}
//   //                   key={i}
//   //                   className="relative bg-[#e8e8e8] w-[70%] mx-auto max-w-[500px]  min-h-[50px] p-4 rounded-xl flex items-center justify-center"
//   //                   name={question.value}
//   //                   onClick={(e) => handleActive(e)}
//   //                 >
//   //                   <span className="span-c">
//   //                     {question.id}
//   //                   </span>
//   //                   <p className="text-center font-c-regular text-[#12416f] relative pointer-events-none">
//   //                     {question.value}
//   //                   </p>
//   //                 </li>
//   //               );
//   //             })}
//   //           </ul>
//   //         </section>
//   //       </div>
//   //       {/* {children} */}
//   //     </CardBoilerplate>
//   //   );
// };

export const CARD1 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions1 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[95vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-3xl">
            A QUÉ DENOMINAMOS <strong>DIGITAL TEAMS?</strong>
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions1"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[80px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-md max-w-[80%]">
                A nuestro servicio de Talento especializado en modalidad
                Outsourcing Ágil para todas tus necesidades de TI.
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  h-[80px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-2xl">Equipo de gamers</p>
            </li>
            <li
              id={`question-3`}
              className="li-c  h-[80px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-2xl">La mejor delantera</p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD2 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions2 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[95vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-3xl">
            ¿QUÉ APORTA NUESTRO CONCEPTO DE <strong>DIGITAL SOLUTIONS?</strong>
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions2"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[80px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-sm max-w-[90%]">
                Diseña y construye soluciones de negocios integrales con nuestro
                enfoque “Business Driven IT”: IA, Lakehouse, Migraciones a la
                Nube, Plataformas WEB & Mobile, BPM, RPA orientadas a tu negocio
                y tu sector.
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-2xl">Busca problemas en los correos</p>
            </li>
            <li
              id={`question-3`}
              className="li-c  h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-2xl">
                Traslada la problemática digital a RRHH
              </p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD3 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions3 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[95vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-3xl">
            ¿QUÉ DIMENSIÓN OFRECE NUESTRO <strong>DIGITAL PRODUCTS?</strong>
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions3"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-xl max-w-[90%]">
                Los mejores productos especializados para cada una de tus
                necesidades.
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-xl max-w-[100%]">
                Contar con la mayor cantidad de juegos en línea.
              </p>
            </li>
            <li
              id={`question-3`}
              className="li-c  h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-xl">
                Tener la mayor colección de programas.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD4 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions4 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[80vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-xl">
            ¿QUÉ SERVICIO DE IA DE AWS TE PERMITE ACCEDER A LA
            <strong> MAYOR VARIEDAD DE MODELOS</strong> FUNDACIONALES DE MANERA
            FÁCIL Y SEGURA?
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions4"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-2xl max-w-[90%]">AWS WaterBed</p>
            </li>
            <li
              id={`question-2`}
              className="li-c  h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-2xl max-w-[80%]">AWS Bedrock</p>
            </li>
            <li
              id={`question-3`}
              className="li-c  h-[70px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-2xl">AWS Bed of Roses</p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD5 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions5 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[80vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-base leading-[1.3rem]">
            ¿QUÉ VENTAJAS OBTIENE UN ADMINISTRADOR DE BASES DE DATOS AL USAR EL{" "}
            <strong>AMAZON RELATIONAL DATABASE SERVICE (RDS)</strong>
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions5"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[60px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-base max-w-[90%]">
                RDS proporciona 99.99999999999% de confiabilidad y durabilidad.
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  min-h-[60px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-base max-w-[80%]">
                Las bases de datos RDS se escalan automáticamente según la
                carga.
              </p>
            </li>
            <li
              id={`question-3`}
              className="li-c  min-h-[60px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-base">
                RDS simplifica las tareas de administración de bases de datos
                relacionales.
              </p>
            </li>
            <li
              id={`question-4`}
              className="li-c  min-h-[60px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">D</span>
              <p className="p-c text-base">
                RDS simplifica las tareas de administración de bases de datos
                relacionales.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD6 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions6 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[80vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-base leading-[1.3rem]">
            UNA GRAN EMPRESA ESTÁ INTERESADA EN EVITAR CONTRATOS A LARGO PLAZO Y
            PASAR DE COSTOS FIJOS A COSTOS VARIABLES. ¿CUÁL ES LA{" "}
            <strong>PROPUESTA DE VALOR DE AWS</strong> PARA ESTA EMPRESA?
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions6"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-base max-w-[80%]">Economías de escala</p>
            </li>
            <li
              id={`question-2`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-base max-w-[80%]">
                Precios de pago por uso
              </p>
            </li>
            <li
              id={`question-3`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-base">Descuentos por volumen</p>
            </li>
            <li
              id={`question-4`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">D</span>
              <p className="p-c text-base">Optimización automática de costos</p>
            </li>
            <li
              id={`question-5`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">E</span>
              <p className="p-c text-base">Todas las anteriores</p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD7 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions7 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[70vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-base leading-[1.3rem]">
            ¿CUÁL ES LA NUBE MÁS MADURA Y{" "}
            <strong>LÍDER POR 12 AÑOS CONSECUTIVOS</strong> SEGÚN EL MAGIC
            QUADRANT DE GARTNER?
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions7"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-xl max-w-[80%]">
                Un datacenter de una telco
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-xl max-w-[80%]">Huawei</p>
            </li>
            <li
              id={`question-3`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-xl">Amazon Web Services - AWS</p>
            </li>
            <li
              id={`question-4`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">D</span>
              <p className="p-c text-xl">Azure</p>
            </li>
            {/* <li
              id={`question-5`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">E</span>
              <p className="p-c text-base">Todas las anteriores</p>
            </li> */}
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD8 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions8 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[90vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-lg leading-[1.3rem]">
            ¿CUÁL ES LA CARACTERÍSTICA <strong>CLAVE DE AWS</strong> EN COSTOS?
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions8"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-xl max-w-[80%]">Modelo de pago por uso</p>
            </li>
            <li
              id={`question-2`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-xl max-w-[80%]">Contratos a largo plazo</p>
            </li>
            <li
              id={`question-3`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-xl">Costos fijos mensuales</p>
            </li>
            <li
              id={`question-4`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">D</span>
              <p className="p-c text-xl">
                Tarifas de soporte técnico adicionales
              </p>
            </li>
            {/* <li
              id={`question-5`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">E</span>
              <p className="p-c text-base">Todas las anteriores</p>
            </li> */}
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD9 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions9 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[90vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-base leading-[1.3rem]">
            ¿CUÁL ES UN CASO DE USO COMÚN PARA <strong>AMAZON TEXTRACT</strong>?
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions9"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-lg leading-[1.2rem] max-w-[80%]">
                Importar documentos y formularios a aplicaciones empresariales.
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-lg leading-[1.2rem] max-w-[80%]">
                Crear índices de búsqueda inteligente.
              </p>
            </li>
            <li
              id={`question-3`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-lg leading-[1.2rem]">
                Construir flujos de trabajo automatizados para el procesamiento
                de documentos.
              </p>
            </li>
            <li
              id={`question-4`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">D</span>
              <p className="p-c text-lg leading-[1.2rem]">
                Garantizar el cumplimiento de la normativa en el archivado de
                documentos.
              </p>
            </li>
            <li
              id={`question-5`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">E</span>
              <p className="p-c text-lg">Todas las anteriores</p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD10 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions10 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[80vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-base leading-[1.3rem]">
            ¿CUÁL ES UN CASO DE USO COMÚN PARA{" "}
            <strong>AMAZON COMPREHEND</strong>?
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions10"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-lg leading-[1.2rem] max-w-[80%]">
                Minado de los análisis del centro de llamadas y empresarial.
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-lg leading-[1.2rem] max-w-[80%]">
                Indexación y búsqueda de opiniones de productos.
              </p>
            </li>
            <li
              id={`question-3`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-lg leading-[1.2rem]">
                Administración de enfoques legales.
              </p>
            </li>
            <li
              id={`question-4`}
              className="li-c  min-h-[55px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">D</span>
              <p className="p-c text-lg leading-[1.2rem]">
                Procesamiento de los documentos financieros.
              </p>
            </li>
            <li
              id={`question-5`}
              className="li-c  min-h-[45px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">E</span>
              <p className="p-c text-lg">Todas las anteriores</p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};

export const CARD11 = () => {
  const handleActive = (e) => {
    const items = document.querySelectorAll("#listQuestions11 li");
    items.forEach((question) => question.classList.remove("activeQuiz"));
    e.target.classList.add("activeQuiz");
  };
  return (
    <CardBoilerplate>
      <div className="w-full mx-auto">
        <header className="mb-5 max-w-[80vw] mx-auto">
          <h2 className="text-[#65a7da] font-c-regular text-wrap text-center text-base leading-[1.3rem]">
            ¿CUÁL ES UN CASO DE USO COMÚN PARA{" "}
            <strong>AMAZON REKOGNITION</strong>?
          </h2>
        </header>
        <section className="container mx-auto">
          <ul
            className="flex flex-col gap-[10px] items-center justify-center"
            id="listQuestions11"
          >
            <li
              id={`question-1}`}
              className="li-c  min-h-[50px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">A</span>
              <p className="p-c text-lg leading-[1.2rem] max-w-[80%]">
                Detección del contenido inapropiado.
              </p>
            </li>
            <li
              id={`question-2`}
              className="li-c  min-h-[50px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">B</span>
              <p className="p-c text-lg leading-[1.2rem] max-w-[80%]">
                Verificación de la identidad en línea.
              </p>
            </li>
            <li
              id={`question-3`}
              className="li-c  min-h-[50px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">C</span>
              <p className="p-c text-lg leading-[1.2rem]">
                Optimización del análisis del contenido multimedia.
              </p>
            </li>
            <li
              id={`question-4`}
              className="li-c  min-h-[50px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">D</span>
              <p className="p-c text-lg leading-[1.2rem]">
                Envío de alertas inteligentes del hogar conectado.
              </p>
            </li>
            <li
              id={`question-5`}
              className="li-c  min-h-[50px]"
              onClick={(e) => handleActive(e)}
            >
              <span className="span-c">E</span>
              <p className="p-c text-lg">Todas las anteriores</p>
            </li>
          </ul>
        </section>
      </div>
    </CardBoilerplate>
  );
};
