import React, { useContext, useEffect, useState } from "react";

import ProductCard from "components/ProductCard";
import axiosInstance from "utils/axios.config";
import Loading from "components/Loading";
import { DataProviderContext } from "context/DataProviderContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { keywords } = useContext(DataProviderContext);
  let filteredProducts = [];

  useEffect(() => {
    axiosInstance
      .get("products")
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Oops, something went wrong");
      });
  }, []);

  if (keywords) {
    filteredProducts = products.filter((product) =>
      product.title?.toLowerCase().includes(keywords?.toLowerCase(keywords))
    );
  } else {
    filteredProducts = products;
  }

  const activeClass = "text-white  bg-blue-500 border-white";

  return (
    <div className="max-w-7xl gap-14 md:mx-16 my-10">
      <div className="mb-10 flex justify-between">
        <h1 className="text-2xl text-blue-500 font-semibold">All Products</h1>
        <div className="flex justify-end gap-2">
          <span className="px-3 py-2 font-semibold">Sort By:</span>
          <button
            className={`border px-3 py-2 rounded-full font-semibold ${activeClass}`}
          >
            Ascending
          </button>
          <button className={`border px-3 py-2 rounded-full font-semibold`}>
            Descending
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <h1>{error} </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-8 mx-auto my-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!filteredProducts.length ? (
        <h1 className="text-center mt-10 text-2xl">Oops no products found</h1>
      ) : null}
    </div>
  );
};

export default Home;
