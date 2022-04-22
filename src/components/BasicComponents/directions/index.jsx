import { useRef, useState } from "react";
import { icons } from "../../../utils/icons";
import "./categories.css";
import DirectionCard from "./directionCard";
function Directions() {
  const directionsData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      imageUrl: "./images/direction-cooker.png",
      imageDesc:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      imageUrl: "",
      imageDesc: "",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      imageUrl: "",
      imageDesc: "",
    },
  ];
  return (
    <section className="w-2/3 font-inter">
      <div className="my-12">
        <h2 className="font-semibold text-4xl">Directions</h2>
      </div>
      <div>
        {directionsData.map(
          ({ id, title, description, imageUrl, imageDesc }, index) => (
            <DirectionCard
              key={id}
              title={title}
              description={description}
              number={index}
              imageUrl={imageUrl}
              imageDesc={imageDesc}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Directions;
