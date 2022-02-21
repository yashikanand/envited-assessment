import { Component } from "react";
import createEvent from "./../../resources/Create event button.png";

class Body extends Component {
  render() {
    return (
      <div id="body">
        <p id="tag-line">Facebook events without Facebook.</p>
        <p id="comment">
          Easily host and share events with your friends across any social
          media.
        </p>
        <img id="create-event" src={createEvent} alt="Create Event" />
      </div>
    );
  }
}

export default Body;
