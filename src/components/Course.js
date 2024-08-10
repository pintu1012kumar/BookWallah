import React, { useEffect, useState } from "react";
// import list from "../components/list.json";
import Card from "./Cards";
import { Link } from "react-router-dom";

import axios from "axios";
const Course = () => {
 
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("res=",res);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div>
      <div className=" text-center   pt-20 ">
        <h1 className="text-3xl font-bold">
          Welcome to the <span className="text-red-600">BookWallah..</span>
        </h1>
        <p className="pt-10 font-bold pl-20 pr-20">
          Explore our curated collection of paid books, featuring top-quality
          titles across various genres and subjects. Whether you're seeking the
          latest bestsellers, academic texts, or timeless classics, our
          selection offers something for every reader. Invest in knowledge and
          entertainment with our premium books, handpicked to meet your needs.
        </p>

        <Link to="/">
          <button className="px-4 py-2 bg-pink-600 text-white rounded mt-10 hover:bg-orange-600 ">
            Back
          </button>
        </Link>

        <div className="grid grid-cols-5 gap-4 mt-20  pl-20">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
