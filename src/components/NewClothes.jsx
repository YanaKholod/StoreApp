import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewClothes } from "../store/shopSlice";
import { addItemToBasket } from "../store/shopSlice";
import ShopItemCard from "./shopComponents/ShopItemCard";

// const Styled = {
//   Wrapper: styled.div`
//     width: 300px;
//     height: 500px;
//     background: white;
//     margin: auto;
//     position: relative;
//     overflow: hidden;
//     border-radius: 10px 10px 10px 10px;
//     box-shadow: 0;
//     transform: scale(0.95);
//     transition: box-shadow 0.5s, transform 0.5s;
//   `,
// };
const NewClothes = () => {
  const newClothesCatalog = useSelector((state) => state.newClothes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewClothes());
  }, []);

  const handleItemToBasket = (item) => {
    dispatch(
      addItemToBasket({
        id: item.id,
        title: item.name,
        img: item.imgUrl,
        category: item.category,
        description: item.compound,
        price: item.price,
      })
    );
  };
  return (
    <div>
      {newClothesCatalog.map((item) => {
        return (
          <ShopItemCard
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              img: item.imgUrl,
              category: item.category,
              description: item.compound,
              price: item.price,
            }}
            handleItemToBasket={handleItemToBasket}
          />
        );
      })}
    </div>
  );
};

export default NewClothes;
