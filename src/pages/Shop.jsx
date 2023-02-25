import React from "react";
import Collection from "../components/shopComponents/Collection";
import SideBar from "../components/shopComponents/SideBar";

const Shop = () => {
  return (
    <div className="mainShop">
      <div>
        <SideBar />
      </div>
      <div>
        <Collection />
      </div>
    </div>
  );
};

export default Shop;
