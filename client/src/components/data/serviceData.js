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
    image: babyShowerImage,
    subServices: [
      {
        title: "Decorations",
        image: realFlowerImage,
        subServices: [
          {
            title: "Banquet Hall Decoration",
            image: heliumImage
          },
          {
            title: "Decorations at Home",
            image: heliumImage
          }
        ]
      },
      {
        title: "Flower and Garlands",
        image: garlandImage,
        subServices: [
          {
            title: ""
          }
        ]
      },
    ],
  },
  "Housewarming Decoration": {
    description:
      "Here you can add more content specific to Housewarming Decoration.",
    image: houseWarmingImage,
    subServices: [
      {
        title: "Decorations",
        image: houseWarmingImage,
      },
      {
        title: "Flowers and Garland",
        image: houseWarmingImage,
      }
    ],
  },
  "Puberty Decorations": {
    description:
    "Puberty Decor",
    image: houseWarmingImage,
    subServices: [
      {
        title: "Decorations",
        image: houseWarmingImage,
        subServices: [
          {
            title: "Banquet Hall Decorations",
            image: houseWarmingImage,
          },
          {
            title: "Decorations at Home",
            image: houseWarmingImage
          }
        ]
      },
      {
        title: "Flower and Garland",
        image: houseWarmingImage,
      }
    ]
  },

  "Wedding Decorations": {
    description: "wedding decor",
    image: houseWarmingImage,
    subServices: [
      {
        title: "Decorations",
        image: houseWarmingImage,
        subServices: [
          {
            title: "Haldi Decoration",
            image: houseWarmingImage,
          },
          {
            title: "Mehndi Ceremony Decoration",
            image: houseWarmingImage,
          },
          {
            title: "Sangeet Decoration",
            image: houseWarmingImage,
          },
          {
            title: "Reception Decoration",
            image: houseWarmingImage,
          },
          {
            title: "Mandap Decoration",
            image: houseWarmingImage,
          },
          {
            title: "Romantic Room Decoration",
            image: houseWarmingImage,
          },
          {
            title: "Beach Wedding Decoration",
            image: houseWarmingImage,
          },
          {
            title: "Car Decoration",
            image: houseWarmingImage,
          }
        ],
      },
      {
        title: "Flower and Garland",
        image: houseWarmingImage,
      },
    ]
  }
};
