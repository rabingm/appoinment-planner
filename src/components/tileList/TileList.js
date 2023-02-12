import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ arrObj }) => {
  return (
    <div>
      {arrObj.map((value, index) => {
        return <Tile value={value} key={index} />;
      })}
    </div>
  );
};
