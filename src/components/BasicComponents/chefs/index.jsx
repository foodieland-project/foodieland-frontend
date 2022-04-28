import ChefCard from "./components/chefCard";
import React from 'react'

function Chefs() {
  const chefsData = [
    {
      id: 1,
      name: "Marcellus H. Waddell",
      role: "Senior Chef",
      imageUrl: " /images/chefs/chef-1.png",
    },
    {
      id: 2,
      name: "Ronald W. Robison",
      role: "Senior Chef",
      imageUrl: "/images/chefs/chef-2.png",
    },
    {
      id: 3,
      name: "Kenneth B. Deshazo",
      role: "Senior Chef",
      imageUrl: "/images/chefs/chef-3.png",
    },
    {
      id: 4,
      name: "Robert H. Houston",
      role: "Senior Chef",
      imageUrl: "/images/chefs/chef-4.png",
    },
  ];
  return (
    <section>
      <div className="font-inter my-28">
        <div className="my-16">
          <h2 className="font-semibold text-4xl sm:text-5xl">
            Our Professional Chefs
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-16  lg:gap-20">
          {chefsData.map(({ id, name, role, imageUrl }) => (
            <ChefCard key={id} name={name} role={role} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chefs;
