import React from "react";

export const Tile = ({ value }) => {
  const array = Object.values(value);

  return (
    <div className="tile-container">
      {array.map((data, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {data}
            </p>
          );
        } else {
          return (
            <p className="tile" key={index}>
              {data}
            </p>
          );
        }
      })}
    </div>
  );
};
