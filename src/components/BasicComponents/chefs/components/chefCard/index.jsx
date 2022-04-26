import React from 'react';

function ChefCard({ name, role, imageUrl }) {
  return (
    <div className=" basis-[35%] md:basis-[18%]">
      <img src={`${imageUrl}`} alt="chef-img" className="rounded-[50%]" />
      <div className="text-center mt-6">
        <h4 className="font-semibold text-lg lg:text-xl">{name}</h4>
        <h6 className="font-semibold text-secondary mt-2">{role}</h6>
      </div>
    </div>
  );
}

export default ChefCard;
