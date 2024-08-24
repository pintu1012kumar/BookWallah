import React from "react";
import list from "../components/list.json";
import Card from "./Cards";

const Demobook = () => {
  const filterdata = list.filter((data) => data.category === "free");
  //console.log(filterdata);

  return (
    <div className="bg-white">
      <div className="pl-12">
        <h1 className="  text-3xl font-bold text-blue-700 ">Free Books</h1>
        <p className="text-black">
          Discover our vast collection of free books, providing a wealth of
          knowledge across various genres and subjects to fuel your reading
          passion without any cost.
        </p>
      </div>
      {/* <div className='flex flex-wrap gap-10 pl-10 pt-9'>
        {filterdata.map((item)=>(
            <Card item={item} key={item.id} />
        ))}
    </div> */}
      <div className="flex overflow-x-auto gap-10 pl-10 pt-9">
        {filterdata.map((item) => (
          <div className="flex-shrink-0 w-64"  key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demobook;