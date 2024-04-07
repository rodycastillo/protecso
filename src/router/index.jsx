import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../views/Home";
import { Quiz } from "../views/Quiz";
import { Thanks } from "../views/Thanks";

import { AnimatePresence } from "framer-motion";

export const RouterApp = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/typage" element={<Thanks />} />
      </Routes>
    </AnimatePresence>
  );
};
