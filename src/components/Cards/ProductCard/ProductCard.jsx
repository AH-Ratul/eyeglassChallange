import React from "react";
import { allIcons } from "../../../data/All-Icons";

const ProductCard = ({ item }) => {
  const { price, productName, image, afterSalePrice, productSale } = item;
  const {love} = allIcons;

  return <main className="mt-9 px-2">
        <section className="px-8">
            <div className="bg-gr3 h-[390px] flex justify-center items-center">
                <img src={image} alt='image' className="w-[343px]"/>\
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
  </main>;
};

export default ProductCard;
