import React from "react";
import "../details/Details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Steph Olasunkanmi</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img src="/whatitcost.png" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/d.png" alt="" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img src="/whatitcost.png" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt="" className=".icon" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img src="/whatitcost.png" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt="" className=".icon" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img src="/whatitcost.png" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt="" className=".icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
