import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import hatsImage from "../../images/hats.jpg";
import womensImage from "../../images/womens.jpg";
import sneakerImage from "../../images/sneakers.jpg";
import mensImage from "../../images/mens.jpg";
import jacketImage from "../../images/jackets.jpg";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
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
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otheSectionProps }) => (
          <MenuItem key={id} {...otheSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
