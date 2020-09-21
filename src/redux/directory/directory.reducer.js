import hatsImage from "../../images/hats.jpg";
import womensImage from "../../images/womens.jpg";
import sneakerImage from "../../images/sneakers.jpg";
import mensImage from "../../images/mens.jpg";
import jacketImage from "../../images/jackets.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: hatsImage,
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: jacketImage,
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: sneakerImage,
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: womensImage,
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: mensImage,
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
