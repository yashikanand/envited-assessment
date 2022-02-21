import { Component } from "react";
import middle from "./../../resources/Product Image _ Middle.png";
import left from "./../../resources/Product Image _ Left.png";
import right from "./../../resources/Product Image _ Right.png";

class CoverPhoto extends Component {
  render() {
    return (
      <div id="cover-photo">
        <img id="left" src={left} alt="left photo" />
        <img id="middle" src={middle} alt="middle photo" />
        <img id="right" src={right} alt="right photo" />
      </div>
    );
  }
}

export default CoverPhoto;
