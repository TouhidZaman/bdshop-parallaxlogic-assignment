import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const { id, title, price, category, image, rating } = product;
  const navigate = useNavigate();

  return (
    <div className="shadow-lg rounded-3xl border relative p-4 flex flex-col">
      <div className="mb-4 flex justify-center">
        <img className="rounded-md h-24 w-24" src={image} alt={"imag"} />
      </div>
      <div className="mb-10">
        <h1 className="font-bold mb-1 text-blue-500">
          {title.length > 35 ? title.substring(0, 35) + "..." : title}
        </h1>
        <p>
          Category: <span className="text-indigo-500 ml-1">{`${category}`}</span>
        </p>
        <p>
          Rating:
          <Rating
            className="mx-1"
            initialRating={rating?.rate}
            emptySymbol={<FaStar className="text-gray-500" />}
            fullSymbol={<FaStar style={{ color: "goldenrod" }} />}
            fractions={2}
            readonly
          ></Rating>
          ({rating?.count})
        </p>
        <p className="font-semibold">Price: {price} BDT</p>
      </div>
      <div className="absolute bottom-3 left-0 w-full px-8 flex justify-between">
        <button
          className="bg-blue-500 rounded-full py-1 px-2 flex-1 mr-1 text-white text-bold"
          onClick={() => navigate(`/product/${id}`)}
        >
          View Details
        </button>
        <button
          title="Add to wishlist"
          className="bg-blue-500 py-1 px-2 rounded-full"
        >
          <BsFillCartFill className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
