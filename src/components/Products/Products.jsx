import React from "react";
import { products } from "../../../public/productData";
import ProductCard from "../Cards/ProductCard/ProductCard";

const Products = () => {
  const data = products;
  console.log(data);
  return (
    <main className="absolute top-[2600px] sm:top-[2900px] lg:top-[2650px] ">
      <section className="flex flex-col justify-center items-center lg:flex-row text-textH1 px-9">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mb-6">Our Products</h1>
          <p>
            Experience crystal clear vision and elevated style with our premium
            collection of eyeglasses.
          </p>
        </div>
        <div className="mt-8 flex items-center font-semibold">
          <div>Latest</div>
          <div className="mr-7 ml-7 border border-gr2 rounded px-4 py-1">
            Special
          </div>
          <div>Best Sell</div>
        </div>
      </section>
      <section>
        {data.map((item) => (
          <ProductCard key={item.id} item={item}></ProductCard>
        ))}
      </section>
    </main>
  );
};

export default Products;
