function RecipeVideoCard({ videoUrl }) {
  return (
    <div className="h-[350px] md:h-[450px] xl:h-[600px]">
      <video
        src={`${videoUrl}`}
        autoPlay
        muted
        controls
        loop
        className="rounded-3xl h-full object-cover mx-auto"
      />
    </div>
  );
}

export default RecipeVideoCard;
