import { Component } from "react";
import coverImage from "./../resources/Cover photo.png";
import Going from "./../resources/Going button.png";
import NotGoing from "./../resources/Not going button.png";
import Maybe from "./../resources/Maybe button.png";
import Invite from "./../resources/Invite button.png";
import Settings from "./../resources/Settings button.png";

class Event extends Component {
  render() {
    return (
      <div>
        <img id="event-cover-image" src={coverImage} alt="Cover Image" />
        <div id="event-details">
          <div id="event-name">
            <div>
              <p id="event-logo">🎉</p>
            </div>
            <div>
              <p id="event-heading">Anica’s 22nd Birthday</p>
              <p id="event-host">Hosted by Anica</p>
            </div>
          </div>

          <div id="event-acceptance">
            <img id="going" src={Going} alt="going" />
            <img id="not-going" src={NotGoing} alt="not going" />
            <img id="maybe" src={Maybe} alt="maybe" />
          </div>

          <div id="event-share">
            <img id="invite" src={Invite} alt="invite" />
            <img id="settings" src={Settings} alt="settings" />
          </div>

          <div id="event-time">
            <div>
              <p id="event-cal">🗓</p>
            </div>
            <div>
              <p id="event-start">Sat 16 Oct 2022 6:00PM</p>
              <p id="event-end">to Sat 16 Oct 2022 11:00PM</p>
              <p id="event-cal-add">Add to calendar</p>
            </div>
          </div>

          <div id="event-location">
            <div>
              <p id="event-pin">📍</p>
            </div>
            <div>
              <p id="event-address">84 Davy Street</p>
              <p id="event-add-link">Open in maps</p>
            </div>
          </div>

          <div id="event-posts">
            <button id="event-detail">Details</button>
            <button id="event-post">Posts</button>
          </div>
          <div id="event-description">
            <p>
              Just a lowkey dinner to celebrate my 22nd. Would love to see you{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
