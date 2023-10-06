import React from "react";
import "./Grid.css";
const Grid = () => {
  return (
    <div className="grid_combinators">
      <h3>This is grid and position</h3>
      <div className="psuedo_nth">
        <div className="box_grid box_1">1</div>
        <div className="box_grid">2</div>
        <div className="box_grid">3</div>
        <div className="box_grid">4</div>
        <div className="box_grid">5</div>
        <div className="box_grid">6</div>
        <div className="box_grid">6</div>
        <div className="box_grid">6</div>
        <div className="box_grid">6</div>
      </div>

      <div className="position_relative">
        <div className="postion_absolute">nasjfhjkafhjkhaj</div>
        <div className="postion_absolute2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          doloribus cupiditate, corporis consequatur dolores, voluptate dicta
          aperiam sunt culpa incidunt sapiente quidem recusandae error soluta at
          nam alias similique obcaecati.
        </div>
        <div className="postion_absolute3">fahkalglkjalkj</div>
      </div>
    </div>
  );
};

export default Grid;
