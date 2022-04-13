import "./carousel.css";
function Carousel() {
  return (
    <div>
      <div className="flex">
        <div className="basis-1/2">
          <div>
            <img src="./images/image 14.png" alt="hot-recipes" />
            <span>Hot Recipes</span>
          </div>
          <div>
            <h2>Spicy delicious chicken wings</h2>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              placeat facere quaerat aperiam molestiae est sed quisquam animi
              quia numquam.
            </p>
          </div>
          <div className=" ">
            <div>
              <span></span>
              <span>30 Minutes</span>
            </div>
            <div>
              <span></span>
              <span>Chicken</span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src="./Elipse 2.png" alt="chief" />
              </div>
              <div>
                <span>John Smith</span>
                <span>12 March 2022</span>
              </div>
            </div>
            <div className="">
              <span>View Recipes</span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div
            className="carousel-bg bg-no-repeat bg-cover w-full h-full"
            style={{
              backgroundImage: "url(./images/baked-chicken-wings.png)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
