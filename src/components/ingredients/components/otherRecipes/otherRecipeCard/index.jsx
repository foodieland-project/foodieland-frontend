import { useNavigate } from "react-router-dom";

function OtherRecipeCard({ img, title, chef, id }) {
  const navigate = useNavigate();

  const reloadHandler = () => {
    navigate(`/recipe/${id}`);
    window.location.reload();
  };
  return (
    <div className="flex gap-4 mb-6 cursor-pointer" onClick={reloadHandler}>
      <div className="max-w-[180px]">
        <img src={`${img}`} alt="recipe" className="rounded-[20px] " />
      </div>
      <div className="flex flex-col justify-around">
        <h6 className="font-semibold text-xl">{title}</h6>
        <span className="text-secondary font-normal text-sm">{chef}</span>
      </div>
    </div>
  );
}

export default OtherRecipeCard;
