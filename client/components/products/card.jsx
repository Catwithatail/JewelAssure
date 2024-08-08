import React from "react";
import styles from "./card.css";

const card = () => {
  return (
    <div className="pcard">
      <div className="card">
        <div className="image">
          <img
            width="188"
            src="https://i.pinimg.com/736x/c3/05/d4/c305d4779da5ede899460d868859d5eb.jpg"
            alt=""
          />
        </div>

        <div className="capsules">
          <span>Nature</span>
          <span>Lake</span>
        </div>
        <div className="content">
          <h2>Harry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo
            numquam vel cumque ullam alias sequi suscipit velit! Enim cumque
            aperiam tempore tenetur?
          </p>
        </div>
        <div className="button">
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default card;
