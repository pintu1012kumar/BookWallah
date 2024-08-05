import React from "react";
import list from "../components/list.json";
import Card from "./Cards";

const Demobook = () => {
  const filterdata = list.filter((data) => data.category === "free");
  console.log(filterdata);

  return (
    <div >
    <div className="pl-12">
    <h1 className="text-3xl font-bold">Free Wallah</h1>
      <p>
        React has been designed from the start for gradual adoption, and you can
        use as little or as much React as you need.
      </p>
    </div>
    {/* <div className='flex flex-wrap gap-10 pl-10 pt-9'>
        {filterdata.map((item)=>(
            <Card item={item} key={item.id} />
        ))}
    </div> */}
    <div className='flex overflow-x-auto gap-10 pl-10 pt-9'>
  {filterdata.map((item) => (
    <div className="flex-shrink-0 w-64">
      <Card item={item} key={item.id} />
    </div>
  ))}
</div>

    </div>
  );
};

export default Demobook;
