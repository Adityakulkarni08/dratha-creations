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

export const serviceDetails = {
  "Birthday Decorations": {
    description:
      "Here you can add more content specific to Birthday Decorations.",
    image: birthdayImage,
    subServices: [
      {
        title: "Balloon Decorations",
        description:
          "Here you can add more content specific to Balloon Decorations.",
        image: balloonImage,
        subServices: [
          {
            title: "Helium Balloons",
            description:
              "Here you can add more content specific to Helium Balloons.",
            image: heliumImage,
            button: {
              text: "Book Now",
              link: "/book/helium-balloons" // Example link
            }
          },
          {
            title: "Foil Balloons",
            description:
              "Here you can add more content specific to Foil Balloons.",
            image: foilImage,
          },
        ],
      },
      {
        title: "Theme Decorations",
        description:
          "Here you can add more content specific to Theme Decorations.",
        image: themeImage,
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
