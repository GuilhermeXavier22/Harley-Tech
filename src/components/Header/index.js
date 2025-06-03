import React from "react";
import "./index.css"; // Importa o CSS
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className="harley-header">
      <NavLink to="/">
        <h1 className="harley-title">Harley Tech</h1>
      </NavLink>
    </header>
  );
};
