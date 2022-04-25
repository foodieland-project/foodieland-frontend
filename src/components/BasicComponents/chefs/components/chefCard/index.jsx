function ChefCard({ name, role, imageUrl }) {
  return (
    <div className=" basis-[40%] md:basis-[22%]">
      <img src={`${imageUrl}`} alt="chef-img" className="rounded-[50%]" />
      <div className="text-center mt-6">
        <h4 className="font-semibold text-lg lg:text-xl">{name}</h4>
        <h6 className="font-semibold text-secondary mt-2">{role}</h6>
      </div>
    </div>
  );
}

export default ChefCard;
