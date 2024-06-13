// serviceData.js
import birthdayImage from "../../images/birthdaydecor.png";
import babyShowerImage from "../../images/babyshowerdecor.png";
import houseWarmingImage from "../../images/housewarmingdecor.png";
import balloonImage from "../../images/birthdaybanner.png";
import themeImage from "../../images/birthdaybanner.png";
import realFlowerImage from "../../images/birthdaybanner.png";
import garlandImage from "../../images/birthdaybanner.png";
import heliumImage from "../../images/birthdaybanner.png";
import foilImage from "../../images/birthdaybanner.png";
import { ItemHeader } from "semantic-ui-react";

export const serviceDetails = {
  "Birthday Decorations": {
    description:
      "Here you can add more content specific to Birthday Decorations.",
    image: birthdayImage,
    subServices: [
      {
        title: "Balloon Decorations",
        // description:
        //   "Here you can add more content specific to Balloon Decorations.",
        image: balloonImage,
        subServices: [
          {
            title: "Simple Baloon Decorations",
            image: heliumImage,
            button: {
              text: "Book Now",
              link: "/book/helium-balloons", // Example link
            },
          },
          {
            title: "Terrace Baloon Decorations",
            image: foilImage,
          },
          {
            title: " Balloon Decoration at Home",
            image: foilImage,
          },
        ],
      },
      {
        title: "Theme Decorations",
        // description:
        //   "Here you can add more content specific to Theme Decorations.",
        image: themeImage,
        subServices: [{ title: "Cocomelon Theme", image: heliumImage },
      {
        title: "Butterfly Theme", image: heliumImage
      },
      {
        title: "Boss Baby Theme", image: heliumImage
      },
      {
        title: "King Crown Theme", image: heliumImage
      },
      {
        title: "Mermaid Theme", image: heliumImage
      },
      {
        title: "Unicorn Theme", image: heliumImage
      },
      {
        title: "Jungle Theme", image: heliumImage
      },
      {
        title: "Candle Theme", image: heliumImage
      },
      {
        title: "Car Theme", image: heliumImage
      },
      {
        title: "Princess Theme", image: heliumImage
      },
      {
        title: "Assorted Themes", image: heliumImage
      },
      {
        title: "Fairy Tale Theme", image: heliumImage 
      },
    ],
      },
    ],
  },
  "Baby Shower Decorations": {
    description:
      "Here you can add more content specific to Baby Shower Decorations.",
    image: babyShowerImage,
    subServices: [
      {
        title: "Real Flower Decorations",
        description:
          "Here you can add more content specific to Real Flower Decorations.",
        image: realFlowerImage,
      },
      {
        title: "Flower and Garlands",
        description:
          "Here you can add more content specific to Flower and Garlands.",
        image: garlandImage,
      },
    ],
  },
  "Housewarming Decoration": {
    description:
      "Here you can add more content specific to Housewarming Decoration.",
    image: houseWarmingImage,
    subServices: [
      // Add sub-services for Housewarming Decoration if needed
    ],
  },
};
