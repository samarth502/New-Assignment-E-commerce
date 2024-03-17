import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import img1 from "../img/banner-image.png";

import SimpleSlider from "./SimpleSlider";
import ProductAllList from "./ProductAllList";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  console.log(categories);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filtered = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <>
      <section className="bg-yellow-300 ">

        <div className=" flex flex-col justify-center items-center gap-10 w-full overflow-x-hidden ">
          <p className="text-6xl text-white font-extrabold xs:text-5xl xs:mt-7 max-xs:text-5xl max-xs:mt-6 ">
            Eflyer
          </p>
          <div className="flex justify-center items-center gap-9  w-[70%] m-auto max-md:w-full ">
            <IoMdMenu
              size={44}
              className="text-white max-md:hidden font-extrabold"
            />

            <div className="flex max-xs:flex-col-reverse max-xs:justify-center max-xs:gap-5 xs:">

            <select
              id="category"
              className="border p-2 rounded   bg-black text-white font-extrabold "
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category} >
                  {category}
                </option>
              ))}
            </select>
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" search"
                className=" lg:w-60 2xl:w-96  md:text-center  py-2 text-center h-11 text-xl xs:w-full md:w-52"
                onChange={(e) => setSearch(e.target.value)}
              />

              <IoSearch
                size={44}
                className="bg-red-600 text-white absolute top-0 right-0  "
              ></IoSearch>
            </div>

            </div>

            <select className="px-6 py-2  max-sm:hidden bg-black text-white font-extrabold">
              <option value="volvo">English</option>
              <option value="saab">Hindi</option>
            </select>

            <div className="flex justify-center items-center gap-4  max-md:hidden">
              <FaCartPlus size={32} className="text-white" />
              <p className="text-xl text-white">Cart</p>

              <FaUser size={32} className="text-white text-xl" />
              <p className="text-xl text-white">Cart</p>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className=" ">
      {/* <h1 className="text-2xl font-bold mb-4">Image Slider with Icons</h1> */}
      <SimpleSlider />
    </div>

        <ProductAllList
          products={products}
          search={search}
          filtered={filtered}
        />
      </section>
    </>
  );
};

export default HeroSection;

// again
