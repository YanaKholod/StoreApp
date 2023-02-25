import React from "react";
import { menuData } from "../utils/mockData";
import { Link } from "react-router-dom";
import s from "./CompStyles.module.css";

const Menu = () => {
  return (
    <div className={s.header}>
      <div className={s.menuwrapper}>
        <ul className={s.menu}>
          {menuData.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
