import React from "react";
import LogoHome from "/img/LogoHome.png";

const Navbar = () => {
  return (
    <nav className="w-screen border-b-2 border-solid border-slate-950">
      <div className="container py-5 mx-auto">
        <a href="/">
          <img src={LogoHome} alt="Logo Home - Protecso" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
