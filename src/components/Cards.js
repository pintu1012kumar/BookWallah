import React from 'react';

const Card = ({item }) => {
    console.log(item.name);
  return (
    <div className='flex flex-wrap gap-4'>
     <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-60 object-cover" src={item.image} alt={item.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">
          {item.title}
        </p>
      </div>
    </div>
    </div>
   
  );
};

export default Card;
