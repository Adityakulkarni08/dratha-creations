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
import pubertyDecor from "../../images/pubertyDecor.png"
import baloonDecor from "../../images/baloonDecor.png"
import themeDecor from "../../images/themeDecor.png"
import simpleBaloon from "../../images/simpleBaloon.png"
import terraceBaloon from "../../images/terraceBaloon.png"
import baloonDecorHome from "../../images/baloonDecorHome.png"
import cocomelonTheme from "../../images/cocomelonTheme.png"
import butterflyTheme from "../../images/butterflyTheme.png"
import bossBabyTheme from "../../images/bossBabyTheme.png"
import kingCrown from "../../images/kingCrown.png"
import mermaidTheme from "../../images/mermaidTheme.png"
import unicornTheme from "../../images/unicornTheme.png"
import jungleTheme from "../../images/jungleTheme.png"
import candyTheme from "../../images/candyTheme.png"
import carTheme from "../../images/carTheme.png"
import princessTheme from "../../images/princessTheme.png"
import assortedTheme from "../../images/assortedTheme.png"
import fairyTaleTheme from "../../images/fairyTaleTheme.png"
import Decorations from "../../images/Decorations.png"
import flowerGarlands from "../../images/flowerGarlands.png"
import decorationHome from "../../images/decorationHome.png"
import decorationsHouseWarming from "../../images/decorationsHouseWarming.png"
import flowersGarlandHouseWarm from "../../images/flowersGarlandHouseWarm.png"
import decorationsPuberty from "../../images/decorationsPuberty.png"
import flowersGarlandPuberty from "../../images/flowersGarlandPuberty.png"
import banquetHallPuberty from "../../images/banquetHallPuberty.png"
import decorationsHomePuberty from "../../images/decorationsHomePuberty.png"
import decorationsWedding from "../../images/decorationsWedding.png"
import flowersGarlandsWedding from "../../images/flowersGarlandsWedding.png"
import haldiWedding from "../../images/haldiWedding.png"
import mehndiDecor from "../../images/mehndiDecor.png"
import sangeetDecor from "../../images/sangeetDecor.png"
import receptionDecor from "../../images/receptionDecor.png"
import mandapDecor from "../../images/mandapDecor.png"
import romanticRoomDecor from "../../images/romanticRoomDecor.png"
import beachDecor from "../../images/beachDecor.png"
import carDecor from "../../images/carDecor.png"

import { ItemHeader } from "semantic-ui-react";

export const serviceDetails = {
  "Birthday Decorations": {
    description:
      "Here you can add more content specific to Birthday Decorations.",
    image: birthdayImage,
    subServices: [
      {
        title: "Balloon Decorations",
        image: baloonDecor,
        subServices: [
          {
            title: "Simple Baloon Decorations",
            image: simpleBaloon,
          },
          {
            title: "Terrace Baloon Decorations",
            image: terraceBaloon,
          },
          {
            title: " Balloon Decoration at Home",
            image: baloonDecorHome,
          },
        ],
      },
      {
        title: "Theme Decorations",
        image: themeDecor,
        subServices: [{ title: "Cocomelon Theme", image: cocomelonTheme },
      {
        title: "Butterfly Theme", image: butterflyTheme
      },
      {
        title: "Boss Baby Theme", image: bossBabyTheme
      },
      {
        title: "King Crown Theme", image: kingCrown
      },
      {
        title: "Mermaid Theme", image: mermaidTheme
      },
      {
        title: "Unicorn Theme", image: unicornTheme
      },
      {
        title: "Jungle Theme", image: jungleTheme
      },
      {
        title: "Candle Theme", image: candyTheme
      },
      {
        title: "Car Theme", image: carTheme
      },
      {
        title: "Princess Theme", image: princessTheme
      },
      {
        title: "Assorted Themes", image: assortedTheme
      },
      {
        title: "Fairy Tale Theme", image: fairyTaleTheme 
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
        image: Decorations,
        subServices: [
          {
            title: "Banquet Hall Decoration",
            image: Decorations
          },
          {
            title: "Decorations at Home",
            image: decorationHome
          }
        ]
      },
      {
        title: "Flower and Garlands",
        image: flowerGarlands,
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
        image: decorationsHouseWarming,
      },
      {
        title: "Flowers and Garland",
        image: flowersGarlandHouseWarm,
      }
    ],
  },
  "Puberty Decorations": {
    description:
    "Puberty Decor",
    image: pubertyDecor,
    subServices: [
      {
        title: "Decorations",
        image: decorationsPuberty,
        subServices: [
          {
            title: "Banquet Hall Decorations",
            image: banquetHallPuberty,
          },
          {
            title: "Decorations at Home",
            image: decorationsHomePuberty
          }
        ]
      },
      {
        title: "Flower and Garland",
        image: flowersGarlandPuberty,
      }
    ]
  },

  "Wedding Decorations": {
    description: "wedding decor",
    image: houseWarmingImage,
    subServices: [
      {
        title: "Decorations",
        image: decorationsWedding,
        subServices: [
          {
            title: "Haldi Decoration",
            image: haldiWedding,
          },
          {
            title: "Mehndi Ceremony Decoration",
            image: mehndiDecor,
          },
          {
            title: "Sangeet Decoration",
            image: sangeetDecor,
          },
          {
            title: "Reception Decoration",
            image: receptionDecor,
          },
          {
            title: "Mandap Decoration",
            image: mandapDecor,
          },
          {
            title: "Romantic Room Decoration",
            image: romanticRoomDecor,
          },
          {
            title: "Beach Wedding Decoration",
            image: beachDecor,
          },
          {
            title: "Car Decoration",
            image: carDecor,
          }
        ],
      },
      {
        title: "Flower and Garland",
        image: flowersGarlandsWedding,
      },
    ]
  }
};
